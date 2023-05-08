import React from 'react'
import '../styles/BookCard.scss'
import { useRecoilState } from 'recoil'
import { bookState } from '../atoms/atom'
import { useNavigate } from 'react-router'

const BookCard = ({ item = {} }) => {

    const navigate = useNavigate()
    const [curbook, setCurbook] = useRecoilState(bookState)
    return (
        <div>
            <div className="book-container">
                <div className="book">
                    <div className="book-preview">
                        <h2>{item.title}</h2>
                        <button onClick={() => {
                            setCurbook(item)
                            navigate('../book')
                        }} className='button'>View Details</button>
                    </div>
                    <div className="book-info">
                        <div className="progress-container">
                            <div className="progress"></div>
                            <span className="progress-text">
                                {item.availability} /{item.total} Available
                            </span>
                        </div>
                        <h6>Material type</h6>
                        <h4>Text</h4>
                        <h6>Format</h6>
                        <h4>print</h4>
                        <h6>Subject</h6>
                        <div className='card-subject'>{
                            item.subject.map((i) => (
                                <h4>{i},</h4>
                            ))
                        }</div>
                        <button className="btn">Place hold</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard
