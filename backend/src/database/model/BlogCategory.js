const { DataTypes } = require('sequelize')
const sequelize = require('../db.confiq.js')

const BlogCategory = sequelize.define('blogCategory', {
   
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = BlogCategory