import React from 'react'
import Navbar from './components/Navbar'
import axios from 'axios'
import { useGetAllProductsQuery } from './redux/productSlice'

const App = () => {

  const { data: products, error, isLoading } = useGetAllProductsQuery();

  console.log(isLoading);

  return (
    <section>


      <Navbar />
    </section>
  )
}

export default App