import { EmailProvider, IMessage } from "../emailProvider";
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'


export class NodeMailerProvider implements EmailProvider {
 private transporter: Mail
 constructor() {
  this.transporter = nodemailer.createTransport({
   host: "smtp.mailtrap.io",
   port: 2525,
   auth: {
    user: "a6879eac3b8dd2",
    pass: "b1d7d5941bad92"
   }
  });
 }

 async sendEmail(message: IMessage): Promise<void> {
  await this.transporter.sendMail({
   to: message.to.email,
   from: message.from.email,
   subject: message.subject,
   html: message.body
  });

 };
}