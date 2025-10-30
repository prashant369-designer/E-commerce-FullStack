const express = require('express');
const router = express.Router();
const { createBlogs, getBlogs, getBlogsById, updateBlog, deleteBlog } = require('../controllers/Blog.Controllers');


    // Routes
    router.post('/', createBlogs);
    router.get('/', getBlogs);
    router.get('/:id', getBlogsById);
    router.put('/:id', updateBlog);
    router.delete('/:id', deleteBlog);
    
    module.exports = router;