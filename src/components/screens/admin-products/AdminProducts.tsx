'use client'

import AdminItem from '@/components/ui/custom/admin-item'
import Filters from '@/components/ui/custom/filters/filters'
import { CONFIG } from '@/constants/config.constant'
import { PATH } from '@/constants/path.constant'
import { formatPrice } from '@/utils/format-price.util'
import { getProductImage } from '@/utils/get-product-image.util'
import { product } from '../product/Product'

export default function AdminProducts() {
	const { PRODUCTS_FILTER } = CONFIG

	return (
		<Filters
			TITLE={PRODUCTS_FILTER.FOUND(1, 2, 1, 2)}
			items={[product]}
			render={product => (
				<AdminItem
					key={product.id}
					created_at={product.created_at}
					title={product.title}
					image={getProductImage(product)}
					rightElement={
						<p className='font-semibold hidden sm:block'>
							{formatPrice(product.price)}
						</p>
					}
				>
					{CONFIG.ADMIN_PRODUCTS.ITEM.DESCRIPTION(product)}
				</AdminItem>
			)}
			PRICE={PRODUCTS_FILTER.FILTERS.PRICE}
			SEARCH={PRODUCTS_FILTER.FILTERS.SEARCH}
			createLink={PATH.ADMIN_PRODUCTS_NEW}
			SELECT={{
				...PRODUCTS_FILTER.FILTERS.CATEGORIES,
				ITEMS: [product.category].map(category => ({
					TITLE: 'Монобукеты',
					VALUE: '124',
				})),
			}}
			SORT={PRODUCTS_FILTER.FILTERS.SORT}
			SWITCHES={[
				PRODUCTS_FILTER.FILTERS.IS_READY,
				PRODUCTS_FILTER.FILTERS.IS_NOT_SHOW,
			]}
		/>
	)
}
