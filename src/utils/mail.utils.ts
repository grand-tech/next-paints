import formData from "form-data";
import Mailgun from "mailgun.js";
import { MailgunMessageData } from "mailgun.js/definitions";

export type MailData = {
  from: string;
  to: string;
  subject: string;
  text: string;
};

const mg = new Mailgun(formData);
const client = mg.client({
  username: "api",
  key: "your-mailgun-api-key",
});

/**
 * Send aemails to a specific address with mail gun.
 * @param emailData details required to send the email.
 */
export const sendEmail = async (emailData: MailData) => {
  const response = await client.messages.create(
    "your-domain.com",
    emailData as MailgunMessageData
  );
  return response;
};
