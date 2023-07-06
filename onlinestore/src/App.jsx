import React from 'react'
import Navbar from './components/Navbar'
import axios from 'axios'
import Home from './components/Home'
import ProductPage from './components/ProductPage'
import { Route, Routes } from 'react-router'
import SearchResults from './components/SearchResults'

const App = () => {




  return (
    <section>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>


    </section>
  )
}

export default App