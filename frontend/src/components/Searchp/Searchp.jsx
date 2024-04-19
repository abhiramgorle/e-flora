import React, { useState } from 'react';
import Searchdisplay from '../Searchdisplay/Searchdisplay';
import './Searchp.css'
import { assets } from '../../assets/assets';

const Searchp = () => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('All');

  const handleSearch = () => {
    // Implement your search logic here
    // For now, let's just log the search query and category
    console.log("Product Name:", productName);
    console.log("Category:", category);
  };

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Search by product name..."
        />
        <button onClick={handleSearch} className="searchp-button"><img src={assets.search_icon_1} alt='' /></button>
      </div>
      <Searchdisplay productName={productName} category={category} />
    </div>
  );
};

export default Searchp;
