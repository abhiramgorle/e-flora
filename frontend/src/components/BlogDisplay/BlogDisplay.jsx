import React, { useEffect, useState, useContext } from 'react';
import './BlogDisplay.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import BlogItem from '../../components/BlogItem/BlogItem';
import { StoreContext } from '../../Context/StoreContext'; // Assuming StoreContext is correctly defined

const BlogDisplay = () => {
    const { url } = useContext(StoreContext); // Accessing url from StoreContext
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${url}/api/blogs/list`);
                if (response.data.success) {
                    setBlogs(response.data.data);
                } else {
                    toast.error(response.data.message);
                }
            } catch (error) {
                console.error("Error fetching blogs:", error);
                toast.error("An error occurred while fetching blogs.");
            }
        };

        fetchBlogs();
    }, [url]); // Make sure to include url in the dependency array

    return (
        <div className="blogs-container">
            <h2>All Blogs</h2>
            <div className="blogbox">
            {blogs.map(blog => (
                <BlogItem
                    key={blog._id} // Assuming each blog has a unique _id field
                    image={blog.image} // Pass the image prop to BlogItem component
                    title={blog.title}
                    description={blog.description}
                    link={blog.link}
                />
            ))}
            </div>
        </div>
    );
};

export default BlogDisplay;
