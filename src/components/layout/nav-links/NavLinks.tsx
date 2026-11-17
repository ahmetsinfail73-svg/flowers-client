'use client'

import { buttonVariants } from '@/components/ui/common/button'
import type { ILinkItem } from '@/constants/config.constant'
import { isActivePath } from '@/utils/is-active-path.util'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface IProps {
	links: ILinkItem[]
}

export default function NavLinks({ links }: IProps) {
	const pathname = usePathname()

	return (
		<nav className='flex-row-sm'>
			{links.map(({ HREF, TITLE }) => (
				<Link
					key={HREF}
					href={HREF}
					className={buttonVariants({
						variant: isActivePath(pathname, HREF) ? 'default' : 'outline',
					})}
				>
					{TITLE}
				</Link>
			))}
		</nav>
	)
}
