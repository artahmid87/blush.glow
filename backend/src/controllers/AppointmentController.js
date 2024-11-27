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

     await NotificationEmail(name, email, date, time, description, price);


  } catch (error) {
    next(error)
  }

}


// const NotificationEmail = async (name, email, date, time, price, description) => {

//   let transporter = nodemailer.createTransport({
//       service: 'gmail', 
//       auth: {
//           user: 'blushglowbar@gmail.com', 
//           pass: 'rkce nbwj bbmf gcve',  
//       }
//   });

//   let mailOptions = {
//       from: 'blushglowbar@gmail.com', 
//       to: "blushglowbar@gmail.com",                     
//       subject: "New Appointment has been booked", 
//       html: `
//           <h2>Name: ${name},</h2>
//           <p><strong>Date: ${date} </strong></p>
//           <p><strong>Time: ${time} </strong></p>
//           <p><strong>Service: ${description}</strong></p>
//           <a href="https://blush.ara-dreamhome.com/dashboard/appointment">See Details...</a>
  
//       `
      
//   };


//   await transporter.sendMail(mailOptions);
// }


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


    if (!name || !email || !phone || !price || !date || !time || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }


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

    await Appointment.update(
      { name, email, phone, price, date, time },
      { where: { id } }
    );

    await sendConfirmationEmail(name, email, date, time, description, price);

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
const sendConfirmationEmail = async (name, email, date, time, price, description) => {

  let transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
          user: 'blushglowbar@gmail.com', 
          pass: 'rkce nbwj bbmf gcve',  
      }
  });

  let mailOptions = {
      from: 'blushglowbar@gmail.com', 
      to: email,                     
      subject: `${price}`, 
      html: `
          <h2>Hello ${name},</h2>
          <p>Your appointment has been confirmed</p>
          <p><strong>${date} - ${time} Please! Check the details</strong></p>
          <p><strong>Service: ${description}</strong></p>
          <p>Thank you for booking</p>
      `
  };


  await transporter.sendMail(mailOptions);



  
};



module.exports = {bookingController, getBookingContoller , removeBooking ,ConfirmationMail, getSingleBooking}