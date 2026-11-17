import { CONFIG } from '@/constants/config.constant'
import Link from 'next/link'
import { buttonVariants } from '../common/button'
import Icon from './icon'

interface IProps {
	url: string
}

export default function BackButton({ url }: IProps) {
	return (
		<Link href={url} className={buttonVariants({ variant: 'link' })}>
			<Icon name='ArrowLeft' />

			{CONFIG.UI.BACK_BUTTON.TITLE}
		</Link>
	)
}
