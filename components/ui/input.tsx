export default function Input({
	type,
	placeholder,
	value,
	onChange,
	className
}: {
	type: string;
	placeholder: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
}) {
	return (
		<input
			type={type}
			className={`input ${className}`}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
}
