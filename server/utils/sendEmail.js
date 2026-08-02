import nodemailer from "nodemailer";

const sendEmail = async ({ name, email, subject, message }) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `📩 New Portfolio Contact: ${subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    console.log("Verifying SMTP...");
    await transporter.verify();
    console.log("SMTP Connected");

    console.log("Sending email...");
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info.response);
  } catch (err) {
    console.error("EMAIL ERROR:", err);
    throw err;
  }
};

export default sendEmail;