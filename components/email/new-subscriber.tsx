import * as React from 'react';

interface NewSubscriberEmailProps {
	email: string;
}

export const NewSubscriberEmail: React.FC<
	Readonly<NewSubscriberEmailProps>
> = ({ email }) => (
	<div>
		<h1>New subscriber</h1>
		<p>Hi Cole,</p>
		<p>
			<b>{email}</b> has subscribed for updates.
		</p>

		<p className='text-sm'>
			This email was intended for <b>{process.env.RECIPIENT_EMAIL}</b>. If you
			were not expecting this email, please ignore it.
		</p>
	</div>
);
