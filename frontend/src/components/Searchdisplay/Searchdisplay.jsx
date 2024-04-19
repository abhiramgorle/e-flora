import React, { useContext, useState } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const Searchdisplay = ({ productName, category }) => {
  const { food_list } = useContext(StoreContext);
  const [displayCount, setDisplayCount] = useState(5); // Initial number of items to display

  // Filter food items based on search query and category
  const filteredFoodList = food_list.filter(item => {
    const nameMatches = productName ? item.name.toLowerCase().includes(productName.toLowerCase()) : true;
    const categoryMatches = category === 'All' || category === item.category;
    return nameMatches && categoryMatches;
  });

  // Function to load more items
  const loadMore = () => {
    setDisplayCount(prevCount => prevCount + 5); // Increase display count by 4
  };

  return (
    <div className='food-display' id='food-display'>
      {filteredFoodList.length === 0 ? (
        <p>No products found with the given search criteria.</p>
      ) : (
        <div className='food-display-list'>
          {filteredFoodList.slice(0, displayCount).map(item => (
            <FoodItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id} category={item.category} />
          ))}
          {displayCount < filteredFoodList.length && (
            <button onClick={loadMore}>Load More</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Searchdisplay;
