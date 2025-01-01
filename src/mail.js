import { Resend } from 'resend';
import { getAcceptedEmailTemplate} from './EmailTemplate.js';
const resend = new Resend('re_WP1UzfKo_ED3bcUStFoehReH8udy2fu2W');

export const sendEmail = async (email, status, amount, orderId ,fullName ) => {
  let html;

  if (status === 'canceled') {
    html = getAcceptedEmailTemplate(email,status, amount, orderId ,fullName);
  } else if (status === 'confirm') {
    html = getAcceptedEmailTemplate(email,status, amount, orderId,fullName);
  } else {
    throw new Error('Invalid email type');
  }

  const { data, error } = await resend.emails.send({
    from: 'CareMe <noreplay@bikash.cloud>',
    to: email,
    subject: status === 'canceled' ? 'Product Cancelled' : 'Product Accepted',
    html,
  });

  console.log(data);
  console.log(error);

  return data;
};

sendEmail('ybicky24@gmail.com', 'confirm', 1000, 1 ,"Bicky yadav");
