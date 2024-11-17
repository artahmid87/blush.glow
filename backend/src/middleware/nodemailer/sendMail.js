// import { APP_PASSWORD } from '../../config/env';

const nodemailer = require('nodemailer');

const sendConfirmationEmail = async (name, email, date) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: 'artahmid87@gmail.com', 
            pass: 'czyi mpdz ptic rozv',  
        }
    });

    // Email content
    let mailOptions = {
        from: 'artahmid87@gmail.com', 
        to: email,                     
        subject: 'Appointment Confirmation', 
        html: `
            <h2>Hello ${name},</h2>
            <p>Your appointment has been confirmed for the following date and time:</p>
            <p><strong>${date}</strong></p>
            <p>Thank you for booking with us!</p>
        `
    };


    await transporter.sendMail(mailOptions);
};

export default sendConfirmationEmail