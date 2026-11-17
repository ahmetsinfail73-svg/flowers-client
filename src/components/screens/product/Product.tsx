'use client'

import Breadcrumb from '@/components/ui/custom/breadcrumb'
import CartButton from '@/components/ui/custom/cart-button'
import CategoryLink from '@/components/ui/custom/category-link'
import FavoriteButton from '@/components/ui/custom/favorite-button'
import Section from '@/components/ui/custom/section'
import SectionHeading from '@/components/ui/custom/section-heading'
import Text from '@/components/ui/custom/text'
import { CONFIG } from '@/constants/config.constant'
import type { IProduct } from '@/types/product.type'
import { formatPrice } from '@/utils/format-price.util'
import ProductGallery from './product-gallery/ProductGallery'

export const product = {
	id: '123',
	title: '101 роза эквадор красные С456',
	price: 31300,
	description:
		'Роза Эквадор красная С456. Длина стебля 60-70 см. Цветок крупный, диаметром 10-12 см. Упаковка: 10 шт.',
	compound: [
		{ name: 'Роза Эквадор красная С456', quantity: 10 },
		{ name: 'Роза Эквадор красная С456', quantity: 20 },
		{ name: 'Роза Эквадор красная С456', quantity: 10 },
	],
	category: {
		id: '123',
		title: 'Монобукеты',
	},
	image_urls: [
		'https://s3.topstore.pro/demo-media/photos/019faac2-e310-764f-8afa-4b390d6a33f4/1.jpg',
		'https://s3.topstore.pro/demo-media/photos/019faac2-e310-764f-8afa-4b390d6a33f4/2.jpg',
		'https://s3.topstore.pro/demo-media/photos/019faac2-e310-764f-8afa-4b390d6a33f4/1.jpg',
		'https://s3.topstore.pro/demo-media/photos/019faac2-e310-764f-8afa-4b390d6a33f4/2.jpg',
		'https://s3.topstore.pro/demo-media/photos/019faac2-e310-764f-8afa-4b390d6a33f4/1.jpg',
		'https://s3.topstore.pro/demo-media/photos/019faac2-e310-764f-8afa-4b390d6a33f4/2.jpg',
	],
	count: 10,
	created_at: '2023-06-01T12:00:00Z',
	is_ready: false,
	is_show: false,
} as IProduct

export default function Product() {
	const { PRODUCT_PAGE } = CONFIG

	return (
		<Section size='sm'>
			<Breadcrumb items={PRODUCT_PAGE.BREADCRUMBS(product.title)} />

			<article className='grid gap-10 lg:grid-cols-2'>
				<ProductGallery images={product.image_urls} title={product.title} />

				<div className='flex-col-lg'>
					<div className='flex-col-md'>
						<div className='flex-center-between'>
							{product.category && (
								<CategoryLink isLink category={product.category} />
							)}

							<FavoriteButton />
						</div>

						<SectionHeading
							level={1}
							TITLE={product.title}
							DESCRIPTION={formatPrice(product.price)}
						/>

						<CartButton />
					</div>

					<section>
						<Text text={product.description} />
					</section>

					<section>
						<h4 className='text-sm'>{CONFIG.PRODUCT_PAGE.COUNT.TITLE}</h4>

						<Text text={CONFIG.PRODUCT_PAGE.COUNT.ITEM(product.count)} />
					</section>

					{product.compound.length > 0 && (
						<section className='flex-col-sm'>
							<h4 className='text-sm'>{CONFIG.PRODUCT_PAGE.COMPOUND.TITLE}</h4>
							{product.compound.map(({ name, quantity }) => (
								<div
									key={name}
									className='flex-center-between text-xs border-b'
								>
									<p className='font-medium'>{name}</p>

									<p className='text-muted-foreground'>
										{CONFIG.PRODUCT_PAGE.COMPOUND.ITEM(quantity)}
									</p>
								</div>
							))}
						</section>
					)}
				</div>
			</article>
		</Section>
	)
}
