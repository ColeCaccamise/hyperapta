'use client';

import { useState } from 'react';
import Input from './ui/input';
import Button from './ui/button';

export default function SubscribeForm() {
	const [showForm, setShowForm] = useState(false);
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');
	const [subscribed, setSubscribed] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setError('');
		setIsLoading(true);

		const response = await fetch('/api/subscribe', {
			method: 'POST',
			body: JSON.stringify({ email })
		});

		if (response.ok) {
			setSubscribed(true);
		} else {
			const data = await response.json();
			setError(data.error);
		}

		setIsLoading(false);
	}

	return (
		<>
			<div className='h-[280px] flex flex-col gap-4'>
				<span className='text-xs font-semibold uppercase tracking-widest'>
					Hyperapta Studios
				</span>
				<h1 className='text-5xl font-bold text-typography-strong'>
					{subscribed ? "You're on the list." : 'Q1 2025.'}
				</h1>

				{!subscribed && (
					<p>
						We&apos;re an indie game studio developing the <b>demo</b> for our
						first <span className='italic text-typography-strong'>horror</span>{' '}
						game.
					</p>
				)}

				{subscribed && (
					<p>
						Thank you. We&apos;ll keep you updated on our development progress.
					</p>
				)}

				{showForm && !subscribed && (
					<form
						className='flex flex-col gap-2'
						onSubmit={handleSubmit}
					>
						<div className='flex gap-2 w-full'>
							<Input
								className='w-full'
								type='email'
								placeholder='peter.parker@gmail.com'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<Button
								type='submit'
								disabled={!email || isLoading}
							>
								{isLoading ? 'Subscribing...' : 'Subscribe'}
							</Button>
						</div>
						<p className='text-sm text-typography-weak'>No spam, we promise.</p>
						{error && <p className='text-error'>{error}</p>}
					</form>
				)}

				{!subscribed && !showForm && (
					<Button onClick={() => setShowForm(true)}>Keep me updated</Button>
				)}
			</div>
		</>
	);
}
