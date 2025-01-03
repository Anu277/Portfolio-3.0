// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create Nodemailer transporter with Yahoo SMTP
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     secure: false,
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//     },
// });

const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Send Email Route
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Create email data
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECIPIENT_EMAIL, // Where the email will be sent
        subject: 'New Message from Portfolio Contact Form',
        html: `
      <h3>Message from: ${name}</h3>
      <p>Email: ${email}</p>
      <h4>Message:</h4>
      <p>${message}</p>
    `,
    };


    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Error in sending email');
        }
        console.log('Email sent: ' + info.response);
        return res.status(200).send('Email sent successfully');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
