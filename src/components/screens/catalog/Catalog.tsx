'use client'

import { Button } from '@/components/ui/common/button'
import Filters from '@/components/ui/custom/filters/filters'
import ProductCard from '@/components/ui/custom/product-card'
import Section from '@/components/ui/custom/section'
import SectionHeading from '@/components/ui/custom/section-heading'
import { CONFIG } from '@/constants/config.constant'
import Image from 'next/image'
import { product } from '../product/Product'

export default function Catalog() {
	const { CATALOG, PRODUCTS_FILTER } = CONFIG

	return (
		<main>
			<Section isTwoColumn>
				<div className='flex-col-md'>
					<SectionHeading
						level={1}
						TITLE={CATALOG.TITLE}
						DESCRIPTION={CATALOG.DESCRIPTION}
					/>

					<ul className='flex-row-sm'>
						{CATALOG.INFO.map(item => (
							<Button variant='outline' key={item}>
								{item}
							</Button>
						))}
					</ul>
				</div>

				<Image
					src={CATALOG.IMAGE.SRC}
					alt={CATALOG.IMAGE.ALT}
					width={960}
					height={720}
					className='image'
				/>
			</Section>

			<Filters
				TITLE={PRODUCTS_FILTER.FOUND(1, 2, 1, 2)}
				items={[product, product, product, product, product]}
				PRICE={PRODUCTS_FILTER.FILTERS.PRICE}
				SEARCH={PRODUCTS_FILTER.FILTERS.SEARCH}
				render={product => <ProductCard key={product.id} product={product} />}
				SELECT={{
					...PRODUCTS_FILTER.FILTERS.CATEGORIES,
					ITEMS: [product.category].map(category => ({
						TITLE: 'Монобукеты',
						VALUE: '124',
					})),
				}}
				SORT={PRODUCTS_FILTER.FILTERS.SORT}
				SWITCHES={[PRODUCTS_FILTER.FILTERS.IS_READY]}
			/>
		</main>
	)
}
