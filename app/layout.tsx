import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Hyperapta Studios',
	description: "We're an indie game studio based in Buffalo, NY.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.className} antialiased`}>
				<div className='flex flex-col items-center justify-center h-screen gap-2'>
					{children}
				</div>
			</body>
		</html>
	);
}
