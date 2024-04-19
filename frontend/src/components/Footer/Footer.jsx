import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logof} alt="logo" className='logoimg'/>
            
        </div>
        {/* <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div> */}
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 9999999999</li>
                <li>contact@company.com</li>
            </ul>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
      </div>
      <p className='footerp'>E-Flora is an online plant shop that offers a wide variety of plants for sale. From lush greenery to colorful blooms, they provide options for both indoor and outdoor gardening enthusiasts. Their platform provides a convenient way for customers to browse and purchase plants from the comfort of their own homes, with detailed descriptions and care instructions provided for each plant. E-Flora aims to make the process of buying and caring for plants accessible and enjoyable for all levels of gardening experience.</p>
      <hr />
      <p className="footer-copyright">Copyright 2024 © E-flora - All Right Reserved.</p>
    </div>
  )
}

export default Footer
