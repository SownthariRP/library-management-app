import React from 'react'
import Pages from './pages/Pages'
import Header from './pages/Header'
import { Router } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
     
      <Header/>
      <Pages/>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App
