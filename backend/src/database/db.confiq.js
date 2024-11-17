const { Sequelize } = require( "sequelize");
const ENV = require("../config/env") 

const dbName = ENV.DBNAME
const dbUser =ENV.DBUSERNAME
const dbPassword = ENV.DBPASSWORD

const sequelize = new Sequelize(dbName, dbUser,dbPassword, {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
});

module.exports = sequelize