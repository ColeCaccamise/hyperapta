export default function Button({
	type,
	onClick,
	children,
	disabled
}: {
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
	children: React.ReactNode;
	disabled?: boolean;
}) {
	return (
		<button
			type={type || 'button'}
			onClick={onClick}
			className={`btn btn-brand-secondary ${disabled ? 'disabled' : ''}`}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
