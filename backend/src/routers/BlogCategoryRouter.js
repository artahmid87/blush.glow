const express = require('express')
const { CreateCategories, getCategories, singleCategory, deleteCategories } = require('../controllers/blogController')

const BlogCategoryRouter = express.Router()

BlogCategoryRouter.post('/createBlogCategory', CreateCategories)
BlogCategoryRouter.get('/findBlogCategories', getCategories)
BlogCategoryRouter.get('/findBlogCategory/:id', singleCategory)
BlogCategoryRouter.delete('/deleteBlogCategory/:id', deleteCategories)

module.exports = {BlogCategoryRouter}