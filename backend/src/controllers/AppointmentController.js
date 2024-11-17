const Appointment = require("../database/model/appointment");

const nodemailer = require('nodemailer');


const bookingController  = async (req, res, next) => {
  try {
    
    const {name, email , phone, price , date, time, description} = req.body
    
    
    if(!name || !email || !phone || !price || !date || !time ||  !description){
        return res.status(404).send("All Field are Required")
    }
  
    const exist = await Appointment.findOne({
      where: {
        date: date,
        time: time
      }
    });
    
    // Check if both date and time match exactly
    if (exist && exist.date === date && exist.time === time) {
      return res.status(406).send("Not available");
    }
    
     const booking =  await Appointment.create({name, email , phone, price , date, time, description})
     res.status(200).send({
      message:"success",
      booking
     })


  } catch (error) {
    next(error)
  }

}


const getBookingContoller  =  async (req, res, next) => {
    try {
        const customer  = await Appointment.findAll()
        res.status(200).send(customer)
     
    } catch (error) {
      next(error);
    }
}


const getSingleBooking = async (req, res, next) => {
  try {
    const { id } = req.params;
    const booking = await Appointment.findOne({
      where: {
        id: id,
      },
    });

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found!",
      });
    }

    res.status(200).json(booking);
  } catch (error) {
    next(error);
  }
};

const ConfirmationMail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, phone, price, date, time, description } = req.body;

    // Validation: Ensure all fields are provided
    if (!name || !email || !phone || !price || !date || !time || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Find the booking by ID
    const booking = await Appointment.findOne({
      where: {
        id: id,
      },
    });

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found!",
      });
    }

    // Update the booking
    await Appointment.update(
      { name, email, phone, price, date, time },
      { where: { id } }
    );

    await sendConfirmationEmail(name, email, date, time, description);

    res.status(200).json({ message: "Booking updated successfully" });
  } catch (error) {
    next(error);
  }
};





const removeBooking = async(req, res, next) =>{

  try {
    const {id} = req.params
  
  const booking =await Appointment.findOne({
    where:{
      id:id
    }
  })

  if(!booking){
    return res.status(404).send(next("Booking Not Found!"))
  }
  

  await Appointment.destroy({
    where:{
      id:id
    }
  })
  res.send("Delete successfully")
  
    
  } catch (error) {
    next(error)
  }
}



// send confirmation mail
const sendConfirmationEmail = async (name, email, date, time, description) => {

  let transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
          user: 'artahmid87@gmail.com', 
          pass: 'czyi mpdz ptic rozv',  
      }
  });

  let mailOptions = {
      from: 'artahmid87@gmail.com', 
      to: email,                     
      subject: 'Appointment Confirmation', 
      html: `
          <h2>Hello ${name},</h2>
          <p>Your appointment has been confirmed for the following date and time:</p>
          <p><strong>Date: ${date}</strong></p>
          <p><strong>Time: ${time}</strong></p>
          <p><strong>${description}</strong></p>
          <p>Stay with us!</p>
      `
  };


  await transporter.sendMail(mailOptions);
};

module.exports = {bookingController, getBookingContoller , removeBooking ,ConfirmationMail, getSingleBooking}