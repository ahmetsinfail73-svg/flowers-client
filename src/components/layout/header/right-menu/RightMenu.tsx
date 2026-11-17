'use client'

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '@/components/ui/common/avatar'
import { Button, buttonVariants } from '@/components/ui/common/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/common/dropdown-menu'
import Icon from '@/components/ui/custom/icon'
import { CONFIG } from '@/constants/config.constant'
import Link from 'next/link'

export default function RightMenu() {
	const { RIGHT_MENU } = CONFIG.HEADER

	return (
		<div className='flex items-center gap-2'>
			{true ? (
				<DropdownMenu>
					<DropdownMenuTrigger
						render={
							<Button variant='ghost' size='icon' className='rounded-full'>
								<Avatar>
									<AvatarImage
										src='https://github.com/shadcn.png'
										alt='shadcn'
									/>
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
							</Button>
						}
					/>
					<DropdownMenuContent className='w-max'>
						<DropdownMenuGroup>
							{RIGHT_MENU.NAV.map(({ HREF, TITLE, ICON }) => (
								<Link href={HREF} key={HREF}>
									<DropdownMenuItem>
										<Icon name={ICON} />
										{TITLE}
									</DropdownMenuItem>
								</Link>
							))}
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			) : (
				<Link href={RIGHT_MENU.LOGIN_BUTTON.HREF} className={buttonVariants()}>
					{RIGHT_MENU.LOGIN_BUTTON.TITLE}
				</Link>
			)}

			<Link
				href={RIGHT_MENU.CALL_BUTTON.HREF}
				className={buttonVariants({ size: 'icon', variant: 'outline' })}
			>
				<Icon name={RIGHT_MENU.CALL_BUTTON.ICON} />
			</Link>
		</div>
	)
}
