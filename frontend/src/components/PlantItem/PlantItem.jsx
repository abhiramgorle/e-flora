import React, { useContext, useState } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import './PlantItem.css';

const FoodItem = ({ image, name, price, desc , id }) => {
    const [itemCount, setItemCount] = useState(0);
    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

    return (
        <div className='plant-item'>
            <div className='plant-item-img-container'>
                <center><img className='plant-item-image' src={url+"/images/"+image} alt="" /></center>
               
            </div>
            
        </div>
    );
};

export default FoodItem;
