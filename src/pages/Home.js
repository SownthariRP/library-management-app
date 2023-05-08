import React from 'react'
import { useRecoilState } from 'recoil'
import { conditionState, searchLengthState } from '../atoms/atom'
import axios from '../api/axios'
import SwiperPart from './SwiperPart'
import '../styles/Home.scss'
import { useNavigate } from 'react-router'


const Home = () => {

  const [searchLength, setSearchLength] = useRecoilState(searchLengthState)
  const [condition, setCondition] = useRecoilState(conditionState)
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/search',
      {
        category_one: condition.cat1,
        category_one_value: capitalizeWords(condition.cat1_value),
        category_two: condition.cat2,
        category_two_value: capitalizeWords(condition.cat2_value),
        category_three: condition.cat3,
        category_three_value: capitalizeWords(condition.cat3_value)

      }
    ).then((res) => {
      console.log(res.data)
      setSearchLength(res.data.length)
      navigate('/search_result')
      // setSearchResult(res.data)
    })

  }
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCondition(
      {
        ...condition,
        [name]: value
      }

    )
    // console.log(condition)
  }
  function capitalizeWords(str) {

    if (str === null)
      return null
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  const keywords = ["title", "author", "publisher", "date_of_publish", "subject"]

  return (
    <div className='home'>
      <div className='info'>
        <SwiperPart interval={3000} />
        <p className='title'>SEARCH YOUR FAVOURITE BOOK</p>
        <center className='title_line'></center>
        <a href="#filter" className='search'>Explore</a>
      </div>

      <div className="filter" id="filter">
        <h2>Advanced Search</h2>
        <div className="row">
          <select name="cat1" value={condition.cat1} onChange={(e) => { handleInputChange(e) }} className='select'>
            <option value=''>Keyword</option>
            {
              keywords.map(keyword => (
                <option value={keyword} key={keyword}>
                  {keyword}
                </option>
              ))
            }
          </select>
          <input type='text' name='cat1_value' onChange={(e) => { handleInputChange(e) }} className='input_text'></input>
        </div>
        <div className="row">
          <select name="cat2" value={condition.cat2} onChange={(e) => { handleInputChange(e) }} className='select'>
            <option value=''>Keyword</option>
            {
              keywords.map(keyword => (
                <option value={keyword} key={keyword}>
                  {keyword}
                </option>
              ))
            }
          </select>
          <input type='text' name='cat2_value' onChange={(e) => { handleInputChange(e) }} className='input_text'></input>
        </div>
        <div className="row">
          <select name="cat3" value={condition.cat3} onChange={(e) => { handleInputChange(e) }} className='select'>
            <option value=''>Keyword</option>
            {
              keywords.map(keyword => (
                <option value={keyword} key={keyword}>
                  {keyword}
                </option>
              )) 
            }
          </select>
          <input type='text' name='cat3_value' onChange={(e) => { handleInputChange(e) }} className='input_text'></input>
        </div>

        <div className='submit'>
          <button onClick={(e) => { handleSubmit(e) }}>Search</button>
        </div>
      </div>

    </div>
  )
}

export default Home
