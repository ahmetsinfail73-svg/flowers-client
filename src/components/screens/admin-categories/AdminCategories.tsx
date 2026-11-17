'use client'

import AdminItem from '@/components/ui/custom/admin-item'
import Filters from '@/components/ui/custom/filters/filters'
import { CONFIG } from '@/constants/config.constant'
import { PATH } from '@/constants/path.constant'
import type { ICategory } from '@/types/category.type'

export default function AdminCategories() {
	const { ADMIN_CATEGORIES } = CONFIG

	return (
		<Filters
			TITLE={ADMIN_CATEGORIES.FOUND(1, 2, 1, 2)}
			items={
				[
					{
						created_at: '2024-06-01T12:00:00Z',
						id: '1',
						title: 'Монобукеты',
						image_url:
							'https://s3.topstore.pro/demo-media/photos/019faac2-e310-764f-8afa-4b390d6a33f4/1.jpg',
						count_products: 12,
					},
				] satisfies ICategory[]
			}
			render={category => (
				<AdminItem
					key={category.id}
					created_at={category.created_at}
					title={category.title}
					image={category.image_url}
					link={PATH.ADMIN_CATEGORIES_EDIT(category.id)}
				>
					{CONFIG.ADMIN_CATEGORIES.ITEM.DESCRIPTION(category.count_products)}
				</AdminItem>
			)}
			createLink={PATH.ADMIN_CATEGORIES_NEW}
			SEARCH={ADMIN_CATEGORIES.FILTERS.SEARCH}
			SORT={ADMIN_CATEGORIES.FILTERS.SORT}
		/>
	)
}
