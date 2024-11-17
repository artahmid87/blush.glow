const express = require('express')
const { blogController, getBlogController, getById, deleteBlog, updateBlogController } = require('../controllers/blogController')
const { upload} = require('../middleware/multer/multer')


const blogRouter = express.Router()


blogRouter.post('/uploadBlog',  upload.single('file'), blogController)
blogRouter.get('/getBlog', getBlogController)
blogRouter.get('/getById/:id', getById)
blogRouter.put('/updateBlog/:id', upload.single('file'), updateBlogController)
blogRouter.delete('/deleteBlog/:id', deleteBlog)

module.exports = {blogRouter}