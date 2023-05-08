import React from 'react'
import BookCard from './BookCard'
import '../styles/Book.scss'
import { useRecoilState } from 'recoil'
import { bookState } from '../atoms/atom'

const Book = () => {
  const [curbook, setCurbook] = useRecoilState(bookState)
  return (
    <div>
      <div className="container">
        <div className="right-column">
          <section className='image-wrapper'>
          
          <img src={curbook.image}/>
          <h1>{curbook.title}</h1>
          </section>
          <div className="product-description">
            
            <h3>By {curbook.author}</h3>
            <h4>{(curbook.availability>0)?"Available":"Not Available"}</h4>
            <p>{curbook.description}</p>
          </div>
          <div className="product-configuration">
            <div className="cable-config">
              <span>Subject(s)</span>

              <div className="cable-choose">
                {
                  curbook.subject.map((item) => (<button>{item}</button>))
                }
              </div>
            </div>
            <div className="product-third">
              <h4>Material Type:<span>Text</span></h4>
              <h4>Language:<span>{curbook.language}</span></h4>
              <h4>Publication details:<span>{curbook.publisher}</span></h4>
              <h4>Publish-Date:<span>{curbook.date_of_publish}</span></h4>
              <h4>Edition:<span>1</span></h4>

            </div>
          </div>

          <div className="product-price">
            <a href="#" className="hold-btn">Place hold</a>
            <a href="#" className="cart-btn">Add to cart</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Book
