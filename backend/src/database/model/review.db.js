const { DataTypes } = require('sequelize')
const sequelize = require('../db.confiq.js')

const Review = sequelize.define('review',{
    name: {
        type:DataTypes.STRING,
        allowNull:false
    },
    imageUrl: {
        type:DataTypes.TEXT,
        allowNull:false
    },
    reviewLink:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:false
    },
   
})

module.exports = Review