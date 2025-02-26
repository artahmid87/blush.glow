const { DataTypes } = require('sequelize')
const sequelize = require('../db.confiq.js')

const Categories = sequelize.define('categories',{
    title: {
        type:DataTypes.STRING,
        allowNull:false
    },
    icon: {
        type:DataTypes.STRING,
        allowNull:false
    },
    shortInto: {
        type:DataTypes.STRING(160),
        allowNull:true,
    },
    isActive: {
        type:DataTypes.BOOLEAN,
        defaultValue: true,
    }
})


module.exports = {Categories}