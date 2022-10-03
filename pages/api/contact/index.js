import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { name, email, subject, message } = req.body;

  let transporter = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.USER, // generated ethereal user
      pass: process.env.PASSWORD, // generated ethereal password
    },
  });

  try {
    let info = await transporter.sendMail({
      from: `"${email} 👻" <dalton@daltoncreates.net>`, // sender address
      to: "daltonbarnett21@yahoo.com", // list of receivers
      subject: `SITE FORM SUBMISSIONG FROM ${name}. SUBJECT:${subject} `, // Subject line
      text: message, // plain text body
    });

    res.status(200).json(info);
  } catch (err) {
    res.status(500).json(err);
  }
}
