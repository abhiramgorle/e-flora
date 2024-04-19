import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'; 
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ image, name, price, desc , id }) => {
    const [itemCount, setItemCount] = useState(0);
    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={url+"/images/"+image} alt="" />
                {!cartItems[id] ?
                    <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                    :
                    <div className="food-item-counter">
                        
                            <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)} alt="" />
                            <p>{cartItems[id]}</p>
                            <img src={assets.add_icon_green} onClick={()=>addToCart(id)} alt="" />
                        
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                <Link to={`/item/${id}`}> <p>{name}</p> <img src={assets.rating_starts} alt="" /></Link>
                </div>
                <div className="food-item-desc"><p className="p-description">{desc}</p></div>
                <p className="food-item-price">&#8377; {price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
