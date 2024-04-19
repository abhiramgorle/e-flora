import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets,url } from '../../assets/assets';


const AddBlogs = () => {
    const [data, setData] = useState({
        title: "",
        description: "",
        link: ""
    });

    const [image, setImage] = useState(null);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("link", data.link);
        formData.append("image", image);

        try {
            const response = await axios.post(`${url}/api/blogs/add`, formData);
            if (response.data.success) {
                toast.success(response.data.message);
                setData({
                    title: "",
                    description: "",
                    link: ""
                });
                setImage(null);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error adding blog:", error);
            toast.error("An error occurred while adding the blog.");
        }
    };

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const onImageChangeHandler = (event) => {
        setImage(event.target.files[0]);
    };

    return (
        <div className="add">
            <form className="flex-col" onSubmit={onSubmitHandler}>
                <div className="add-img-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" />
                    </label>
                    <input onChange={onImageChangeHandler} type="file" id="image" hidden required />
                </div>
                <div className="add-product-name flex-col">
                    <p>Blog Title</p>
                    <input name="title" onChange={onChangeHandler} value={data.title} type="text" placeholder="Type here" required />
                </div>
                <div className="add-product-description flex-col">
                    <p>Blog Description</p>
                    <textarea name="description" onChange={onChangeHandler} value={data.description} type="text" rows={6} placeholder="Write content here" required />
                </div>
                <div className="add-product-link flex-col">
                    <p>Blog Link</p>
                    <input name="link" onChange={onChangeHandler} value={data.link} type="text" placeholder="https://example.com" required />
                </div>
                <button type="submit" className="add-btn">ADD</button>
            </form>
        </div>
    );
};

export default AddBlogs;
