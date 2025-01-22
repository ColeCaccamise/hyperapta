import { NextResponse } from 'next/server';
import { createOrUpdateSubscriber } from '@/lib/mailerlite';
import { sendNewSubscriberEmail } from '@/lib/resend';

export async function POST(request: Request) {
	try {
		const { email } = await request.json();

		if (!email) {
			return NextResponse.json(
				{ error: 'Email is required.' },
				{ status: 400 }
			);
		}

		const result: { success: boolean; error?: string } =
			await createOrUpdateSubscriber(email);

		if (!result?.success) {
			return NextResponse.json(
				{ error: result?.error || 'Failed to subscribe.' },
				{ status: 500 }
			);
		}

		const { success, error } = await sendNewSubscriberEmail({
			subscriberEmail: email
		});

		if (!success) {
			console.error('Failed to send notification email', error);
		}

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error(error);

		return NextResponse.json(
			{ error: 'internal server error' },
			{ status: 500 }
		);
	}
}
