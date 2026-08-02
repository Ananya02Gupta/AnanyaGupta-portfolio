import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ name, email, subject, message }) => {
  const response = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "ananyagupta315@gmail.com", // अपनी email
    subject: `📩 New Portfolio Contact: ${subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  console.log(response);
};

export default sendEmail;