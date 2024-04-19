import React from 'react'
import { useState } from 'react'
import ItemDisplay from '../../components/ItemDisplay/ItemDisplay'

const Products = () => {

    const [category,setCategory] = useState("All")

  return (
    <div>
      <ItemDisplay category={category}/>
    </div>
  )
}

export default Products;