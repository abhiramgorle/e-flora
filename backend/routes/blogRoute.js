// routes/blogRoute.js
import express from 'express';
import { addBlog, listBlogs, removeBlog } from '../controllers/blogController.js';
import multer from 'multer';

const blogRouter = express.Router();

// Image Storage Engine (Saving Image to uploads folder & rename it)
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
})

const upload = multer({ storage: storage })

blogRouter.get("/list", listBlogs); // GET /api/blogs/list - List all blogs
blogRouter.post("/add", upload.single('image'), addBlog); // POST /api/blogs/add - Add a new blog
blogRouter.post("/remove", removeBlog); // POST /api/blogs/remove - Remove a blog

export default blogRouter;
