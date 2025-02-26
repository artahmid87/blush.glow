const express = require('express')

const {CreateCategories, deleteCategories, getCategories, singleCategory, updateStatusController, updateCategoriesController} = require("../controllers/ServiceController")

const { service_img } = require('../middleware/multer/multer')

const serviceRouter = express.Router()


serviceRouter.post('/createCategory',service_img.single('icon'), CreateCategories)
serviceRouter.get('/findCategories', getCategories)
serviceRouter.get('/findCategory/:id', singleCategory)
serviceRouter.put('/updateCategory/:id', service_img.single('icon'), updateCategoriesController) 
serviceRouter.put('/updateStatus/:id', service_img.single('icon'), updateStatusController)
serviceRouter.delete('/deleteCategory/:id', deleteCategories)

module.exports = {serviceRouter}