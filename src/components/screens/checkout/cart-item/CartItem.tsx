import { Badge } from '@/components/ui/common/badge'
import {
	Item,
	ItemActions,
	ItemContent,
	ItemMedia,
	ItemTitle,
} from '@/components/ui/common/item'
import Text from '@/components/ui/custom/text'
import { CONFIG } from '@/constants/config.constant'
import type { ICartItem } from '@/store/cart.store'
import { formatPrice } from '@/utils/format-price.util'
import { getProductImage } from '@/utils/get-product-image.util'
import Image from 'next/image'

interface IProps {
	item: ICartItem
}

export default function CartItem({ item: { product, quantity } }: IProps) {
	const { CART_ITEM } = CONFIG.CHECKOUT

	return (
		<Item variant='outline'>
			<ItemMedia>
				<Image
					src={getProductImage(product)}
					alt={product.title}
					width={56}
					height={56}
					className='rounded-lg object-cover'
				/>
			</ItemMedia>

			<ItemContent>
				<ItemTitle className='line-clamp-2'>{product.title}</ItemTitle>

				<Badge variant='secondary'>{CART_ITEM.QUANTITY(quantity)}</Badge>
			</ItemContent>

			<ItemActions>
				<Text text={formatPrice(product.price)} className='font-semibold' />
			</ItemActions>
		</Item>
	)
}
