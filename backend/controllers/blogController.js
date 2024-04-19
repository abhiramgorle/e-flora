// controllers/blogController.js
import BlogModel from "../models/blogModel.js";
import fs from 'fs';

// Get all blogs
const listBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.find({})
        res.json({ success: true, data: blogs })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// Add a new blog
const addBlog = async (req, res) => {
    let image_filename = `${req.file.filename}`

    const blog = new BlogModel({
        title: req.body.title,
        description: req.body.description,
        link: req.body.link,
        image: image_filename,
    })

    try {
        await blog.save();
        res.json({ success: true, message: "Blog Added" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
};

// Remove a blog
const removeBlog = async (req, res) => {
    try {
        const blog = await BlogModel.findById(req.body.id);
        fs.unlink(`uploads/${blog.image}`, () => { })// Remove image file

        await BlogModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Blog Removed" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

export { listBlogs, addBlog, removeBlog }
