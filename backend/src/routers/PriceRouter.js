const express = require('express')



const {CreatePricePlan, deletePrice, getPrice, updatePricePlan,singlePricePlan} = require("../controllers/ServiceController")
const { service_img } = require('../middleware/multer/multer')

const priceRouter = express.Router()

priceRouter.post('/createPrice',  service_img.single('image'), CreatePricePlan)
priceRouter.get('/findPrices', getPrice)
priceRouter.get('/findPrices/:id', singlePricePlan)
priceRouter.put('/updatePrices/:id', service_img.single('image'), updatePricePlan)
priceRouter.delete('/deletePrice/:id', deletePrice)

module.exports = {priceRouter}