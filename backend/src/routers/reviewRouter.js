const express = require('express')
const { ReviewController } = require('../controllers/ReviewController')
const ReviewRouter = express.Router()

ReviewRouter.get('/review', ReviewController)

module.exports = {ReviewRouter}