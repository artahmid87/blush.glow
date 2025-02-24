const express = require('express')
const { OffdayController, RemoveOffDay,getAllOffday, getSingleOffday,  } = require('../controllers/HolidayController')
const HolidayRouter = express.Router()


HolidayRouter.post('/holiday', OffdayController)
HolidayRouter.get('/get/holiday', getAllOffday)
HolidayRouter.get('/get/holiday/:id', getSingleOffday)
HolidayRouter.delete('/delete/holiday/:id', RemoveOffDay)



module.exports = {HolidayRouter}