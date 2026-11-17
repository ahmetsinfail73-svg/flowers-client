import Icon from '@/components/ui/custom/icon'
import { cn } from 'cn'
import type { ReactNode } from 'react'

interface IProps {
	children: ReactNode
	className?: string
}

export default function Quote({ children, className }: IProps) {
	return (
		<blockquote
			className={cn(
				'flex w-full flex-col justify-between gap-14 rounded-2xl bg-accent p-8  sm:gap-20 sm:p-12 lg:p-16',
				className,
			)}
		>
			<span className='text-muted-foreground'>
				<Icon name='Quote' size={50} />
			</span>

			<p className='max-w-3xl text-2xl font-semibold sm:text-3xl lg:text-4xl'>
				{children}
			</p>
		</blockquote>
	)
}
