require('dotenv').config();

const ENV ={
     PORT : process.env.PORT || 5000,
     DBNAME:process.env.DBNAME || 'blush',
     DBUSERNAME:process.env.DBUSERNAME || "root",
     DBPASSWORD:process.env.DBPASSWORD || '',
     JWRKEY:process.env.JWRKEY,
     APP_PASSWORD:process.env.APP_PASSWORD,
     APPNAME:process.env.APPNAME

}

 module.exports = ENV