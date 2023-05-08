import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './Home'
import SearchResults from './SearchResults'
import Book from './Book'
import Login from './Login'
import BookCard from './BookCard'


const Pages = () => {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/login' exact element={<Login />} />
      <Route path='/search_result' exact element={<SearchResults />} />
      <Route path='/book' exact element={<Book />} />
    </Routes>

  )
}

export default Pages