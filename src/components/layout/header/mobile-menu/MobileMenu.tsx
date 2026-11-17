'use client'

import { buttonVariants } from '@/components/ui/common/button'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTrigger,
} from '@/components/ui/common/sheet'
import Icon from '@/components/ui/custom/icon'
import { CONFIG } from '@/constants/config.constant'
import { isActivePath } from '@/utils/is-active-path.util'
import { cn } from 'cn'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import UserMenu from '../right-menu/RightMenu'

export function MobileMenu() {
	const [open, setOpen] = useState(false)

	const pathname = usePathname()

	const { HEADER } = CONFIG

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger
				className={cn(
					buttonVariants({ size: 'icon', variant: 'outline' }),
					'lg:hidden',
				)}
			>
				<Icon name='Menu' />
			</SheetTrigger>
			<SheetContent
				side='top'
				showCloseButton={false}
				style={{ height: '100%', width: '100%' }}
			>
				<SheetHeader className='flex-row items-center justify-end py-4 cont'>
					<SheetClose
						className={buttonVariants({ variant: 'outline', size: 'icon' })}
					>
						<Icon name='X' />
					</SheetClose>
				</SheetHeader>

				<nav className='flex-col-md px-5 pt-8 items-start'>
					{HEADER.NAV.map(({ HREF, TITLE }) => {
						const isActive = isActivePath(pathname, HREF)

						return (
							<Link
								key={HREF}
								href={HREF}
								onClick={() => setOpen(false)}
								className={cn('text-3xl', isActive && 'text-primary')}
							>
								{TITLE}
							</Link>
						)
					})}
				</nav>

				<SheetFooter>
					<UserMenu />
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
