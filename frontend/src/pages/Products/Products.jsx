import React from 'react'
import { useState } from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Products = () => {

    const [category,setCategory] = useState("All")

  return (
    <div>
    <ExploreMenu setCategory={setCategory} category={category}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Products;