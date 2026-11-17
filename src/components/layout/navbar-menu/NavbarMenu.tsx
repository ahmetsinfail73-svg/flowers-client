'use client'

import Icon from '@/components/ui/custom/icon'
import { CONFIG } from '@/constants/config.constant'
import { isActivePath } from '@/utils/is-active-path.util'
import { cn } from 'cn'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavbarMenu() {
	const pathname = usePathname()

	return (
		<nav className='sticky left-0 bottom-0 z-50 border-t bg-background  md:hidden'>
			<div className='cont flex justify-around items-center py-3 gap-1'>
				{CONFIG.HEADER.NAV.map(({ HREF, TITLE, ICON }) => {
					const isActive = isActivePath(pathname, HREF)

					return (
						<Link
							href={HREF}
							key={TITLE}
							className={cn(
								'flex flex-col items-center gap-1 text-center text-muted-foreground truncate',
								isActive && 'text-primary',
							)}
						>
							<Icon name={ICON} />
							<span className='text-xs font-medium '>{TITLE}</span>
						</Link>
					)
				})}
			</div>
		</nav>
	)
}
