interface IProps {
	text: string
	className?: string
}

export default function Text({ text, className }: IProps) {
	return (
		<div className={className}>
			{text
				.trim()
				.split('\n')
				.map(paragraph => (
					<p key={paragraph.trim()} className='leading-8'>
						{paragraph.trim()}
					</p>
				))}
		</div>
	)
}
