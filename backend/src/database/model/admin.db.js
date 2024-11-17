const bcrypt = require('bcryptjs');
const { DataTypes } = require('sequelize')
const sequelize = require('../db.confiq.js')

  const Admin = sequelize.define('admin', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }

  });


  module.exports = Admin
