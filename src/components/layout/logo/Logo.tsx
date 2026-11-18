import { CONFIG } from '@/constants/config.constant'
import { PATH } from '@/constants/path.constant'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
	return (
		<Link href={PATH.ROOT}>
			<Image
				src={CONFIG.APP.LOGO.SRC}
				alt={CONFIG.APP.LOGO.ALT}
				height={40}
				width={158}
			/>
		</Link>
	)
}
