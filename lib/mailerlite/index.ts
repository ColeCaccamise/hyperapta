import MailerLite from '@mailerlite/mailerlite-nodejs';

const mailerlite = new MailerLite({
	api_key: process.env.MAILERLITE_API_KEY as string
});

const groups = {
	hyperapta: '144177312795984948'
};

export default mailerlite;

export async function createOrUpdateSubscriber(
	email: string
): Promise<{ success: boolean; error?: string }> {
	if (!mailerlite) {
		return { success: false, error: 'MailerLite not initialized' };
	}

	const params = {
		email,
		groups: [groups.hyperapta],
		status: 'active' as const
	};

	try {
		await mailerlite.subscribers.createOrUpdate(params);
		return {
			success: true
		};
	} catch (error: any) {
		return {
			success: false,
			error: error.response?.data || 'Failed to subscribe'
		};
	}
}
