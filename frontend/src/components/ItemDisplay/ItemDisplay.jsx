import React, { useState, useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import PlantItem from '../PlantItem/PlantItem';
import { useParams } from 'react-router-dom';
import './ItemDisplay.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import Aisearch from '../Aisearch/Aisearch'; // Import Aisearch component

const ItemDisplay = () => {
    const { id } = useParams();
    const { food_list, cartItems, addToCart, removeFromCart } = useContext(StoreContext);
    const [isAIBoxOpen, setIsAIBoxOpen] = useState(false); // State to manage the visibility of AI box

    // Find the product with the matching ID
    const product = food_list.find(item => item._id === id);

    // Function to toggle the AI box
    const toggleAIBox = () => {
        setIsAIBoxOpen(!isAIBoxOpen);
    };

    return (
        <div className='item-display' id='item-display'>
            <h2>Product Details</h2>
            {product ? (
                <div className="product-details">
                    <div className="plantimage">
                        <PlantItem image={product.image} />
                    </div>
                    <div className='plantdetails'>
                        <h1 className="product-name">{product.name}</h1>
                        <img src={assets.rating_starts} alt="" /><br />
                        <h3>Plant description:</h3>
                        <div className="p-description-box">
                            <p className="p-description">{product.description}</p>
                        </div>
                        <br /><br />
                        <div className='ai'>
                            <p className="product-price">Price: &#8377; {product.price}</p>
                            {/* Pass productName as a prop to Aisearch */}
                            <button className="aibtn" onClick={toggleAIBox}>
                                Ask AI
                            </button>
                            {/* Render AI box if isAIBoxOpen is true */}
                            {isAIBoxOpen && (
                                <>
                                    {/* Blurred background */}
                                    <div className="blur-background"></div>
                                    {/* AI box */}
                                    <div className="ai-box">
                                        {/* AI response content */}
                                        <Aisearch productName={product.name} /> {/* Pass productName */}
                                        {/* Close button */}
                                        <span className="ai-close-button" onClick={toggleAIBox}>X</span>
                                    </div>
                                </>
                            )}
                        </div>
                        <br />
                        <div className='addtocart'>
                            <button className='addy' onClick={() => addToCart(id)}>Add to cart</button>
                            <Link to='/cart'><button onClick={() => addToCart(id)} className='buyy'>Buy Now</button></Link>
                            <div className="quantity-controls">
                                {!cartItems[id] ? (
                                    <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                                ) : (
                                    <div className='quantity'>
                                        <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="" />
                                        <p>{cartItems[id]}</p>
                                        <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>No product found with ID: {id}</p>
            )}
        </div>
    );
};

export default ItemDisplay;
