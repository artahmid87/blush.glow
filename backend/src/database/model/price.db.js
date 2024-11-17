const { DataTypes } = require('sequelize')
const sequelize = require('../db.confiq.js')

const PricePlan = sequelize.define('service-prices',{
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

module.exports = { PricePlan}