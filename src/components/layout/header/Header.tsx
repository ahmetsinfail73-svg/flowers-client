'use client'

import { CONFIG } from '@/constants/config.constant'
import { isActivePath } from '@/utils/is-active-path.util'
import { cn } from 'cn'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '../logo/Logo'
import { MobileMenu } from './mobile-menu/MobileMenu'
import RightMenu from './right-menu/RightMenu'

export default function Header() {
	const pathname = usePathname()

	const { HEADER } = CONFIG

	return (
		<header className='sticky top-0 z-50 border-b bg-background h-header'>
			<div className='flex-center-between gap-3 cont h-full'>
				<Logo />

				<nav className='hidden items-center gap-6 lg:flex'>
					{HEADER.NAV.map(({ HREF, TITLE }) => {
						const isActive = isActivePath(pathname, HREF)

						return (
							<Link
								key={HREF}
								href={HREF}
								className={cn('link', {
									active: isActive,
								})}
							>
								{TITLE}
							</Link>
						)
					})}
				</nav>

				<div className='flex items-center gap-2'>
					<RightMenu />

					<MobileMenu />
				</div>
			</div>
		</header>
	)
}
