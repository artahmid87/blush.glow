const { DataTypes } = require('sequelize')
const sequelize = require('../db.confiq.js')

const Categories = sequelize.define('categories',{
    title: {
        type:DataTypes.STRING,
        allowNull:false
    }
   
})
const PricePlan = sequelize.define('pricePlan',{
    title: {
        type:DataTypes.STRING,
        allowNull:false
    },
    image: {
        type:DataTypes.STRING,
        allowNull:false
    },
    price: {
        type:DataTypes.STRING,
        allowNull:false
    }
   
})

module.exports = {Categories, PricePlan}