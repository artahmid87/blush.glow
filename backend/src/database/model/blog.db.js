const { DataTypes } = require('sequelize')
const sequelize = require('../db.confiq.js');

const Blog = sequelize.define('blog', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    file: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    BlogCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true, 
    }
   
  });

module.exports = Blog