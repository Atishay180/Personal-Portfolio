import nodemailer from "nodemailer";
import { OWNER_EMAIL_TEMPLATE, USER_QUERY_EMAIL_TEMPLATE } from "./template";

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_EMAIL!,
        pass: process.env.NODEMAILER_PASSWORD!,
    }
});

//send email to user to let them know that their query has been sent
export const sendEmailToUser = async ({ email, name, message, topic }: UserEmailTemplate) => {
    const htmlTemplate = USER_QUERY_EMAIL_TEMPLATE
        .replace('{{name}}', name)
        .replace('{{topic}}', topic)
        .replace('{{message}}', message)
        .replace('{{contactEmail}}', process.env.NODEMAILER_EMAIL!)

    const mailOptions = {
        from: `"Atishay's Portfolio" <${process.env.NODEMAILER_EMAIL!}>`,
        to: email,
        subject: `Thanks for reaching out to me!`,
        html: htmlTemplate
    }

    await transporter.sendMail(mailOptions);
}

//send email to owner(me) to let them know that user has sent a query
export const sendEmailToOwner = async ({ name, email, message, topic }: OwnerEmailTemplate) => {
    const htmlTemplate = OWNER_EMAIL_TEMPLATE
        .replace('{{name}}', name)
        .replace('{{email}}', email)
        .replace('{{topic}}', topic)
        .replace('{{message}}', message);

    const mailOptions = {
        from: `"Atishay's Portfolio" <${process.env.NODEMAILER_EMAIL!}>`,
        to: process.env.NODEMAILER_EMAIL!,
        subject: `New message from ${name}`,
        html: htmlTemplate
    }

    await transporter.sendMail(mailOptions)
}
