'use client'

import { CONFIG } from '@/constants/config.constant'
import { PATH } from '@/constants/path.constant'
import type { ICategory } from '@/types/category.type'
import { cn } from 'cn'
import { useRouter } from 'next/navigation'
import { Badge } from '../common/badge'

interface IProps {
	className?: string
	category: ICategory
	isLink?: boolean
}

export default function CategoryLink({
	category,
	className,
	isLink = false,
}: IProps) {
	const { push } = useRouter()

	return (
		<Badge
			variant='secondary'
			onClick={() =>
				isLink &&
				push(
					`${PATH.CATALOG}?${new URLSearchParams({ [CONFIG.PRODUCTS_FILTER.FILTERS.CATEGORIES.NAME]: category.id }).toString()}`,
				)
			}
			className={cn(
				'hover:text-primary transition-colors duration-300 cursor-pointer',
				className,
			)}
		>
			{category.title}
		</Badge>
	)
}
