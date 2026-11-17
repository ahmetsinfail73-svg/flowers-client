'use client'

import { Button } from '@/components/ui/common/button'
import {
	ButtonGroup,
	ButtonGroupText,
} from '@/components/ui/common/button-group'
import {
	Item,
	ItemActions,
	ItemContent,
	ItemDescription,
	ItemMedia,
	ItemTitle,
} from '@/components/ui/common/item'
import Icon from '@/components/ui/custom/icon'
import Text from '@/components/ui/custom/text'
import type { ICartItem } from '@/store/cart.store'
import { formatPrice } from '@/utils/format-price.util'
import { getProductImage } from '@/utils/get-product-image.util'
import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface IProps {
	item: ICartItem
}

export default function CartItem({ item: { product, quantity } }: IProps) {
	const [count, setCount] = useState(quantity)

	return (
		<Item variant='outline'>
			<ItemMedia>
				<Image
					src={getProductImage(product)}
					alt={product.title}
					width={64}
					height={64}
					className='object-cover rounded-xl'
				/>
			</ItemMedia>

			<ItemContent>
				{product.category && (
					<ItemDescription className='text-xs'>
						{product.category.title}
					</ItemDescription>
				)}

				<ItemTitle className='font-semibold text-base line-clamp-2'>
					{product.title}
				</ItemTitle>
			</ItemContent>

			<ItemActions>
				<div className='flex-center-center gap-2'>
					<Text
						text={formatPrice(product.price * count)}
						className='font-semibold text-nowrap'
					/>

					<ButtonGroup>
						<ButtonGroup>
							<Button variant='outline' size='icon' disabled={quantity <= 1}>
								<Minus />
							</Button>

							<ButtonGroupText>{quantity}</ButtonGroupText>

							<Button
								variant='outline'
								size='icon'
								disabled={quantity >= product.count}
							>
								<Plus />
							</Button>
						</ButtonGroup>

						<ButtonGroup>
							<Button variant='destructive' size='icon'>
								<Icon name='Trash' />
							</Button>
						</ButtonGroup>
					</ButtonGroup>
				</div>
			</ItemActions>
		</Item>
	)
}
