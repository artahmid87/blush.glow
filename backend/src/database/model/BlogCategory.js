const { DataTypes } = require('sequelize')
const sequelize = require('../db.confiq.js')

const CategoryBlog = sequelize.define('blogcategorydb',{
    title: {
        type:DataTypes.STRING,
        allowNull:false
    }
   
})

module.exports = {CategoryBlog}