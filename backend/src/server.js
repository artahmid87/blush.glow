const app = require("./app/app.js")
const http = require('http');
const ENV = require("./config/env.js");
const  createError =  require("http-errors") 
const Server = http.createServer(app);


//Not found error handling
app.use((req, res, next) => {
    next(createError(401, "Route not found"));
  });
  
  // server error handling
  app.use((err, req, res, next) => {
    return res.status(err.status || 500).json({
      success: false,
      message: err.message,
    });
  });
  


// server
Server.listen(ENV.PORT , ()=>{
    console.log(`server is running at http://localhost:${ENV.PORT}`)
})

module.exports =  {Server}