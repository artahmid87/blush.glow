const { DataTypes } = require('sequelize')
const sequelize = require('../db.confiq.js')

const Gallery = sequelize.define('gallery',{
    title: {
        type:DataTypes.STRING,
        allowNull:false
    },
    path:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = Gallery