const { DataTypes } = require('sequelize')
const sequelize = require('../db.confiq.js')

const Holiday = sequelize.define('holiday',{
    name: {
        type:DataTypes.STRING,
        allowNull:true
    },
    fromDate:{
        type:DataTypes.STRING,
        allowNull:true
    },
    toDate:{
        type:DataTypes.STRING,
        allowNull:true
    },
    fromTime:{
        type:DataTypes.STRING,
        allowNull:true
    },
    toTime:{
        type:DataTypes.STRING,
        allowNull:true
    },
})

module.exports = Holiday