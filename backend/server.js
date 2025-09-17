import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Resend } from 'resend';

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Init Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Test route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hi from backend' });
});

// Send Email Route
app.post('/send-email', async (req, res) => {
  const { name, email, message, subject } = req.body;

  try {
    const data = await resend.emails.send({
      from: process.env.EMAIL_USER,          // Sender (Resend default or verified domain)
      to: process.env.RECIPIENT_EMAIL,       // Your inbox
      subject: subject || `New message from ${name}`, // Dynamic subject (fallback included)
      html: `
        <h3>Message from: ${name}</h3>
        <p>Email: ${email}</p>
        <h4>Message:</h4>
        <p>${message}</p>
      `,
    });

    console.log('Email sent:', data);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`✅ Server running on render : ${port}`);
});
