export default function Button({
	type,
	onClick,
	children,
	disabled,
	className
}: {
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
	children: React.ReactNode;
	disabled?: boolean;
	className?: string;
}) {
	return (
		<button
			type={type || 'button'}
			onClick={onClick}
			className={`btn btn-brand-secondary ${
				disabled ? 'disabled' : ''
			} ${className}`}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
