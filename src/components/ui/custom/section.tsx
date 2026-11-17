import { cn } from 'cn'
import type { ReactNode } from 'react'

interface IProps {
	children: ReactNode
	className?: string
	size?: 'lg' | 'sm'
	isTwoColumn?: boolean
	isPaddingTop?: boolean
}

export default function Section({
	children,
	className,
	size = 'lg',
	isTwoColumn = false,
	isPaddingTop = true,
}: IProps) {
	return (
		<section
			className={cn(
				'cont flex-col-lg',
				className,
				isTwoColumn && 'lg:flex-row lg:items-center',
				size === 'lg' ? 'py-16 md:py-24' : 'py-6 md:py-8',
				!isPaddingTop && 'pt-0!',
			)}
		>
			{children}
		</section>
	)
}
