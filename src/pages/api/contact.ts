import { setMaxIdleHTTPParsers } from "http";
import { NextApiRequest } from "next";
import { walkUpBindingElementsAndPatterns } from "typescript";
require("dotenv").config();

export default function Contact(req: any, res: any) {
  const password = process.env.password;
  const email = process.env.email;
  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: email,
      pass: password,
    },
    secure: true,
  });
  const emailData = {
    from: "dev.winters.jobs",
    to: process.env.email,
    subject: `email from ${req.body.name}`,
    text: req.body.message + "| sent from " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };

  transporter.sendMail(emailData, (err: any, info: any) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
  res.status(200);
}
