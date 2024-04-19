import React from 'react';
import './BlogItem.css';

// BlogItem component

const BlogItem = ({ image, title, description, link, url }) => {
    return (
        <div className='blog-item'>
            <div className='blog-item-img-container'>
                <center><img className='blog-item-image' src={"http://localhost:4000"+ "/images/" + image} alt="Blog" /></center>
            </div>
            <div className='blog-item-info'>
                <h3 className='blog-item-title'>{title}</h3><br />
                <p className='blog-item-description'>{description}</p><br /><br />
                <a href={link} className='blog-item-link'>Read more</a>
            </div>
        </div>
    );
};

export default BlogItem;
