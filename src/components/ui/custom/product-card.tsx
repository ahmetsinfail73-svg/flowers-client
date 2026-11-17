'use client'

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardTitle,
} from '@/components/ui/common/card'

import { PATH } from '@/constants/path.constant'
import type { IProduct } from '@/types/product.type'
import { formatPrice } from '@/utils/format-price.util'
import { getProductImage } from '@/utils/get-product-image.util'
import Image from 'next/image'
import Link from 'next/link'
import CategoryLink from './category-link'

interface IProps {
	product: IProduct
}

export default function ProductCard({ product }: IProps) {
	return (
		<Link
			href={PATH.PRODUCT(product.id)}
			className='group cursor-pointer relative'
		>
			<Card>
				<Image
					src={getProductImage(product)}
					alt={product.title}
					width={480}
					height={480}
					className='aspect-square w-full object-cover'
				/>

				{product.category && (
					<CategoryLink
						category={{ id: '123', title: 'Монобукеты' } as any}
						className='absolute top-4 left-4'
					/>
				)}

				<CardContent>
					<CardTitle className='line-clamp-2 font-semibold transition-colors group-hover:text-primary'>
						{product.title}
					</CardTitle>
				</CardContent>

				<CardFooter>
					<CardDescription>{formatPrice(product.price)}</CardDescription>
				</CardFooter>
			</Card>
		</Link>
	)
}
