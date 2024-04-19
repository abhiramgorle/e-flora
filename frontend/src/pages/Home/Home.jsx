import React from 'react'
import Header from '../../components/Header/Header'
import { useState } from 'react'
import LatestProducts from '../../components/LatestProducts/LatestProducts'

const Home = () => {
  const [category, setCategory] = useState("All")

  return (
    <>
      <Header /> <br />
      <hr /><br />
      <center><h1>Latest Products</h1></center>
      <LatestProducts category={category} />
    </>
  )
}

export default Home;
