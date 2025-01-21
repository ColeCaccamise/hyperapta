import SubscribeForm from '@/components/subscribe-form';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
	return (
		<div className='flex flex-col items-start justify-center h-screen gap-4 w-full max-w-md'>
			<SubscribeForm />

			<div className='flex w-full justify-between items-center'>
				<Link
					className='text-sm text-typography-weak hover:text-typography-strong'
					href='https://caccamedia.com'
				>
					&copy; 2025 Caccamedia
				</Link>

				<div className='flex gap-4 items-center'>
					<Link
						className='text-sm text-typography-weak hover:text-typography-strong'
						href='mailto:hi@hyperapta.com'
					>
						Contact
					</Link>
					<Link
						className='text-sm text-typography-weak hover:text-typography-strong'
						href='https://www.youtube.com/@hyperapta'
					>
						<FontAwesomeIcon
							className='w-8 h-8'
							icon={faYoutube}
						/>
					</Link>
				</div>
			</div>
		</div>
	);
}
