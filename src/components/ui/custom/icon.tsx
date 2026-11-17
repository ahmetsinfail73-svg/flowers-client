import { icons } from 'lucide-react'

export type TypeIconName = keyof typeof icons

interface IProps {
	name: TypeIconName
	size?: number
	className?: string
	mode?: 's' | 'm'
}

export default function Icon({ name, size, className, mode = 'm' }: IProps) {
	const LucideIcon = icons[name]

	return (
		<LucideIcon
			size={size ? size : mode === 's' ? 16 : 20}
			className={className}
		/>
	)
}
