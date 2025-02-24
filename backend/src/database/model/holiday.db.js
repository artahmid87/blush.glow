const { DataTypes } = require('sequelize')
const sequelize = require('../db.confiq.js')

const Holiday = sequelize.define('holiday',{
    name: {
        type:DataTypes.STRING,
        allowNull:false
    },
    fromDate:{
        type:DataTypes.STRING,
        allowNull:false
    },
    toDate:{
        type:DataTypes.STRING,
        allowNull:false
    },
    fromTime:{
        type:DataTypes.STRING,
        allowNull:false
    },
    toTime:{
        type:DataTypes.STRING,
        allowNull:false
    },
})

module.exports = Holiday