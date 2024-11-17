const { DataTypes } = require('sequelize')
const sequelize = require('../db.confiq.js')

const Categories = sequelize.define('categories',{
    title: {
        type:DataTypes.STRING,
        allowNull:false
    }
   
})


module.exports = {Categories}