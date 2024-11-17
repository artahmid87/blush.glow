const express = require('express')


const {CreateCategories, deleteCategories, getCategories, singleCategory, updateCategories,} = require("../controllers/ServiceController")

const serviceRouter = express.Router()


serviceRouter.post('/createCategory', CreateCategories)
serviceRouter.get('/findCategories', getCategories)
serviceRouter.get('/findCategory/:id', singleCategory)
serviceRouter.put('/updateCategory/:id', updateCategories)
serviceRouter.delete('/deleteCategory/:id', deleteCategories)

module.exports = {serviceRouter}