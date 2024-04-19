import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { url } from '../../assets/assets';

const ListBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    const response = await axios.get(`${url}/api/blogs/list`)
    if (response.data.success) {
      setBlogs(response.data.data);
    } else {
      toast.error(response.data.message);
    }
    setLoading(false);
  };

  const removeBlog = async (blogId) => {
    const response = await axios.post(`${url}/api/blogs/remove`, { id: blogId });
    if (response.data.success) {
      toast.success(response.data.message);
      await fetchBlogs();
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="list add flex-col">
      <p>All Blogs List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Title</b>
          <b>Description</b>
          <b>Link</b>
          <b>Action</b>
        </div>
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog._id} className="list-table-format">
              <img src={`${url}/images/`+blog.image} alt="blog" />
              <p>{blog.title}</p>
              <p className="two-lines">{blog.description}</p>
              <p>{blog.link}</p>
              <p className="cursor" onClick={() => removeBlog(blog._id)}>x</p>
            </div>
          ))
        ) : (
          <div>No blogs found.</div>
        )}
      </div>
    </div>
  );  
};

export default ListBlogs;
