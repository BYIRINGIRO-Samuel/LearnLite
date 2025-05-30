import nodemailer from "nodemailer";
import { config } from "../config/default.js";

export interface IEmailOptions {
  email: string;
  subject: string;
  message: string;
}
const sendEmail = async (options: IEmailOptions) => {
  //create the transporter
  const transporter = nodemailer.createTransport({
    service: config.emailHost,
    auth: {
      user: config.emailUser,
      pass: config.emailPass,
    },
  });

  //define the email options
  const emailOptions = {
    from: `Learn-Lite <${config.emailUser}>`,
    to: options.email,
    subject: options.subject,
    text: "Reset token sent",
    html: options.message,
  };

  //send the email
  await transporter.sendMail(emailOptions);
};

export default sendEmail;
