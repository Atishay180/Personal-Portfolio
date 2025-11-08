import { sendEmailToOwner, sendEmailToUser } from "../nodemailer";
import { inngest } from "./client";

//email to owner to tell that user has some query
export const sendQueryEmail = inngest.createFunction(
    { id: 'user-query-email' },
    { event: 'app/email.sent' },
    async ({ event, step }) => {

        const { data: { name, email, topic, message } } = event;

        //send email to user
        await step.run('send-email-to-user', async () => {
            return await sendEmailToUser({ name, email, topic, message });
        })

        //send email to owner
        await step.run('send-email-to-owner', async () => {
            return await sendEmailToOwner({ name, email, topic, message });
        });

        return {
            success: true,
            message: `Email sent successfully`
        }
    },
)

