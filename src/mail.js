import { Resend } from "resend";
import {  getEmailTemplate } from "./EmailTemplate.js";
import dotenv from "dotenv";

dotenv.config();
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (email, status, amount, orderId, fullName) => {
  let emailTemplate = getEmailTemplate(email,status,amount,orderId,fullName)
  console.log("Sending Email to: "+email);

  const { data, error } = await resend.emails.send({
    from: "Art-of-sunar <noreplay@bikash.cloud>",
    to: email,
    subject: status === "canceled" ? "Order Cancelled" : "Order Confirmed",
    html:emailTemplate,
  });

  console.log(data);
  console.log(error);

  return data;
};


