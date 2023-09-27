const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false });
  }

  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.titan.email',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailData = {
    from: process.env.EMAIL_USER, // Updated this line
    replyTo: email,
    to: 'contact@jamesarcher.io',
    subject: `Contact Form Submission from ${name}`,
    text: message,
    html: `<div>${message}</div>`,
  };

  try {
    await transporter.sendMail(mailData);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
