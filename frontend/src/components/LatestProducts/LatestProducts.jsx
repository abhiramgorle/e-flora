import React, { useContext } from 'react';
import FoodItem from '../FoodItem/FoodItem';
import { StoreContext } from '../../Context/StoreContext';

const LatestProducts = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // Get the last four items from food_list
  const latestProducts = food_list
    .filter(item => category === 'All' || category === item.category)
    .slice(-4); // Slice to get the last four items

  return (
    <div className='food-display' id='food-display'>
      <div className='food-display-list'>
        {latestProducts.map(item => (
          <FoodItem
            key={item._id}
            image={item.image}
            name={item.name}
            desc={item.description}
            price={item.price}
            id={item._id}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
