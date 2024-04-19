import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Importing toast

const Cart = () => {

    const { cartItems, food_list, addToCart, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
    const navigate = useNavigate();

    const handlePlaceOrder = () => {
        if (getTotalCartAmount() === 0) {
            toast.error("Your cart is empty. Add items to place an order.");
            return; // Stop further execution
        }
        navigate('/order'); // Navigate to the order page
    };

    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p> <p>Title</p> <p>Price</p> <p>Quantity</p> <p>Total</p> <p>Add/Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div key={index}>
                                <div className="cart-items-title cart-items-item">
                                    <img src={url + "/images/" + item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>&#8377;{item.price}</p>
                                    <div>{cartItems[item._id]}</div>
                                    <p>&#8377;{item.price * cartItems[item._id]}</p>
                                    <div className='carticon' style={{ border: 'none' }}>
                                        <p onClick={() => removeFromCart(item._id)}>-</p>
                                        <p onClick={() => addToCart(item._id)}>+</p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details"><p>Subtotal</p><p>&#8377;{getTotalCartAmount()}</p></div>
                        <hr />
                        <div className="cart-total-details"><p>Delivery Fee</p><p>&#8377;{getTotalCartAmount() === 0 ? 0 : 5}</p></div>
                        <hr />
                        <div className="cart-total-details"><b>Total</b><b>&#8377;{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}</b></div>
                    </div>
                    <button onClick={handlePlaceOrder}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart-promocode">
                    <div>
                        <p>If you have a promo code, Enter it here</p>
                        <div className='cart-promocode-input'>
                            <input type="text" placeholder='promo code' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
