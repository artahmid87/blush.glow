const Review = require("../database/model/review.db")

const ReviewController = async (req, res, next) =>{

    try {
        const review = await Review.findAll()
         res.status(200).send({review})
        
    } catch (error) {
        next(error)
    }

}
module.exports = {ReviewController}