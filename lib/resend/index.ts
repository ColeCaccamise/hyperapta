import { NewSubscriberEmail } from '@/components/email/new-subscriber';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
	recipientEmail,
	subject,
	template
}: {
	recipientEmail?: string;
	subject: string;
	template: React.ReactNode;
}) {
	if (!recipientEmail) {
		return {
			success: false,
			error: 'Recipient email is required.'
		};
	}

	if (!process.env.SENDER_EMAIL) {
		console.error('Sender email is not set in the environment.');

		return {
			success: false,
			error: 'Could not send email. Please try again later.'
		};
	}

	const { error } = await resend.emails.send({
		from: process.env.SENDER_EMAIL,
		to: recipientEmail,
		subject,
		react: template
	});

	if (error) {
		console.error('Error sending email', error);

		return {
			success: false,
			error: 'Could not send email. Please try again later.'
		};
	}

	return {
		success: true
	};
}

export async function sendNewSubscriberEmail({
	subscriberEmail
}: {
	subscriberEmail: string;
}) {
	return await sendEmail({
		recipientEmail: process.env.RECIPIENT_EMAIL,
		subject: 'New subscriber to Hyperapta interest list',
		template: NewSubscriberEmail({ email: subscriberEmail })
	});
}
