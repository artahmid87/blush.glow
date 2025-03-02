const { DataTypes } = require('sequelize')
const sequelize = require('../db.confiq.js')

const Certificate = sequelize.define('certificate',{
    title: {
        type:DataTypes.STRING,
        allowNull:false
    },
    image:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = Certificate