const express = require('express')
const { bookingController,getBookingContoller,removeBooking, ConfirmationMail, getSingleBooking } = require('../controllers/AppointmentController')


const AppointmentRouter = express.Router()


AppointmentRouter.post('/booking', bookingController)
AppointmentRouter.get('/get/customer', getBookingContoller)
AppointmentRouter.get('/get/:id', getSingleBooking)
AppointmentRouter.put('/confirmBooking/:id', ConfirmationMail)
AppointmentRouter.delete('/delete/booking/:id', removeBooking)



module.exports = {AppointmentRouter}