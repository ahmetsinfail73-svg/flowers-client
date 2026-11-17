'use client'

import { buttonVariants } from '@/components/ui/common/button'
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/components/ui/common/card'
import Section from '@/components/ui/custom/section'
import SectionHeading from '@/components/ui/custom/section-heading'
import Text from '@/components/ui/custom/text'
import { CONFIG } from '@/constants/config.constant'
import type { ICartItem } from '@/store/cart.store'
import { formatPrice } from '@/utils/format-price.util'
import Link from 'next/link'
import { product } from '../product/Product'
import CartItem from './cart-item/CartItem'

export default function Cart() {
	const { CART } = CONFIG

	return (
		<Section>
			<SectionHeading level={1} {...CART} />

			<div className='grid-columns-2'>
				<div>
					<div className='flex-col-sm'>
						{(
							[
								{ product, quantity: 1 },
								{ product, quantity: 1 },
							] as ICartItem[]
						).map(item => (
							<CartItem item={item} key={item.quantity} />
						))}
					</div>
				</div>

				<Card>
					<CardHeader>
						<div className='flex-center-between flex-row-sm'>
							<CardTitle>{CART.TOTAL_LABEL}</CardTitle>

							<Text className='font-semibold' text={formatPrice(31300)} />
						</div>
					</CardHeader>
					<CardContent className='flex-col-md'>
						<Link
							href={CART.CHECKOUT_BUTTON.HREF}
							className={buttonVariants({ size: 'lg' })}
						>
							{CART.CHECKOUT_BUTTON.TITLE}
						</Link>
					</CardContent>
				</Card>
			</div>
		</Section>
	)
}
