import Icon from './icon'

interface IProps {
	items: string[]
}

export default function MarkerList({ items }: IProps) {
	return (
		<ul className='flex-center-center flex-col gap-y-3 text-center text-xs font-semibold tracking-widest sm:flex-row sm:flex-wrap sm:gap-x-6'>
			{items.map((item, index) => (
				<li
					key={item}
					className='flex flex-col items-center gap-3 sm:flex-row sm:gap-6'
				>
					<span>{item}</span>

				</li>
			))}
		</ul>
	)
}
