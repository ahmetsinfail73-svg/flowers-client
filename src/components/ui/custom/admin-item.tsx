import { buttonVariants } from '@/components/ui/common/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from '@/components/ui/common/card'
import Icon from '@/components/ui/custom/icon'
import { formatDate } from '@/utils/format-date.util'
import { getInitials } from '@/utils/get-initials.util'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../common/avatar'
import { Badge } from '../common/badge'

interface IProps {
	image?: string
	title: string
	children?: ReactNode
	created_at?: string
	badge?: string
	rightElement?: ReactNode
	link?: string
}

export default function AdminItem({
	image,
	title,
	children,
	created_at,
	badge,
	rightElement,
	link,
}: IProps) {
	return (
		<Card size='sm'>
			<CardContent className='flex-row-sm flex-center-between'>
				<div className='flex-row-sm items-center'>
					<Avatar size='lg'>
						{image && <AvatarImage src={image} alt={title} />}
						<AvatarFallback>{getInitials(title)}</AvatarFallback>
					</Avatar>

					<div>
						<div className='flex-row-sm items-center'>
							<CardTitle className='font-semibold'>{title}</CardTitle>

							{badge && <Badge variant={'outline'}>{badge}</Badge>}
						</div>

						<CardDescription className='text-xs'>{children}</CardDescription>
					</div>
				</div>

				<div className='flex-row-sm items-center'>
					{rightElement ? (
						rightElement
					) : created_at ? (
						<CardDescription className='text-xs sm:block hidden'>
							{formatDate(created_at)}
						</CardDescription>
					) : null}

					{link && (
						<Link
							href={link}
							className={buttonVariants({
								variant: 'outline',
								size: 'icon-sm',
							})}
						>
							<Icon name='Pencil' mode='s' />
						</Link>
					)}
				</div>
			</CardContent>
		</Card>
	)
}
