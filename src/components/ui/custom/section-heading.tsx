import { cn } from 'cn'

interface IProps {
	SUPER_TITLE?: string
	TITLE: string
	DESCRIPTION?: string
	level?: 1 | 2
	className?: string
}

export default function SectionHeading({
	SUPER_TITLE,
	TITLE,
	DESCRIPTION,
	level = 2,
	className,
}: IProps) {
	const headingClassName = cn(
		'max-w-3xl text-3xl font-semibold md:text-5xl break-words',
		level === 1 && 'text-4xl md:text-6xl',
	)

	return (
		<div className={cn('flex-col-md', className)}>
			{SUPER_TITLE && (
				<p className='text-xs font-semibold tracking-[2px] text-primary'>
					{SUPER_TITLE}
				</p>
			)}

			{level === 1 ? (
				<h1 className={headingClassName}>{TITLE}</h1>
			) : (
				<h2 className={headingClassName}>{TITLE}</h2>
			)}

			{DESCRIPTION && (
				<p className='max-w-2xl text-base leading-7 text-muted-foreground md:text-lg'>
					{DESCRIPTION}
				</p>
			)}
		</div>
	)
}
