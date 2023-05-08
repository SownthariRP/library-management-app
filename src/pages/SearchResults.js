import { React, useState, useEffect, useRef } from 'react'
import { useRecoilState } from 'recoil';
import { conditionState, searchLengthState, searchResultsState } from '../atoms/atom';
import axios from '../api/axios';
import BookCard from './BookCard'
import '../styles/SearchResult.scss'

const SearchResults = () => {
  const [data, setData] = useRecoilState(searchResultsState)
  const [searchLength, setSearchLength] = useRecoilState(searchLengthState)
  const [condition, setCondition] = useRecoilState(conditionState)
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(1);
  const [loading, setLoading] = useState(false);

  const observer = useRef(null);

  useEffect(() => {
    setLoading(true);
    // setData([])
    axios.get(`searching/?page=${page}&limit=${limit}&category_one=${condition.cat1}&category_one_value=${capitalizeWords(condition.cat1_value)}&category_two=${condition.cat2}&category_two_value=${capitalizeWords(condition.cat2_value)}&category_three=${condition.cat3}&category_three_value= ${capitalizeWords(condition.cat3_value)}`
    ).then((response) => {
      setData((prevData) => [...prevData, ...response.data.data]);
      setLoading(false);
    });
  }, [page]);

  const loadMore = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  function capitalizeWords(str) {

    if (str === null)
      return null
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  useEffect(() => {

    setData([])
   
    observer.current = new IntersectionObserver(loadMore, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });
    if (observer.current) {
      observer.current.observe(document.querySelector("#sentinel"));
    }
  }, []);

  return (

    
    <div className="container1">
      <div className='search-results'>Search Results : {searchLength}</div>
      {searchLength==0
      ?<div className='not-found'><img src='https://cdn-icons-png.flaticon.com/512/3270/3270367.png'/>No books found</div>
      :<ul className="list">
        {data.map((item) => (
          <li>
            <BookCard item={item} />
          </li>
        ))}
      </ul>}
      {loading && searchLength>0 && <p className="loading">Loading more items...</p>}
      <div id="sentinel" className="sentinel" />
    </div>
  );
}


export default SearchResults
