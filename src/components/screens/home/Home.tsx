'use client'

import { buttonVariants } from '@/components/ui/common/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardTitle,
} from '@/components/ui/common/card'
import {
	Item,
	ItemContent,
	ItemMedia,
	ItemTitle,
} from '@/components/ui/common/item'
import Icon from '@/components/ui/custom/icon'
import MarkerList from '@/components/ui/custom/marker-list'
import ProductCard from '@/components/ui/custom/product-card'
import Section from '@/components/ui/custom/section'
import SectionHeading from '@/components/ui/custom/section-heading'
import { CONFIG } from '@/constants/config.constant'
import Image from 'next/image'
import Link from 'next/link'
import { product } from '../product/Product'

export default function Home() {
	const { HOME } = CONFIG

	return (
		<main>
			<div className='bg-accent'>
				<Section size='sm'>
					<MarkerList items={HOME.ADVANTAGES} />
				</Section>
			</div>
			<Section>
				<SectionHeading
					level={1}
					SUPER_TITLE={HOME.SUPER_TITLE}
					TITLE={HOME.TITLE}
					DESCRIPTION={HOME.DESCRIPTION}
				/>

				<div className='flex-row-sm'>
					<Link href={HOME.CATALOG_BUTTON.HREF} className={buttonVariants()}>
						{HOME.CATALOG_BUTTON.TITLE}
					</Link>

					<Link
						href={HOME.DELIVERY_BUTTON.HREF}
						className={buttonVariants({ variant: 'outline' })}
					>
						{HOME.DELIVERY_BUTTON.TITLE}
					</Link>
				</div>

				<ul className='flex-row-sm'>
					{HOME.INFO.map(({ TITLE, ICON }) => (
						<li key={TITLE} className='flex items-center gap-1 text-sm'>
							<Icon name={ICON} />

							{TITLE}
						</li>
					))}
				</ul>
			</Section>

			

			<Section>
				<div className='flex flex-wrap items-end justify-between gap-6'>
					<SectionHeading
						SUPER_TITLE={HOME.SHOWCASE.SUPER_TITLE}
						TITLE={HOME.SHOWCASE.TITLE}
						DESCRIPTION={HOME.SHOWCASE.DESCRIPTION}
					/>

					<Link
						href={HOME.CATALOG.CATALOG_BUTTON.HREF}
						className={buttonVariants({ variant: 'outline' })}
					>
						{HOME.CATALOG.CATALOG_BUTTON.TITLE}
					</Link>
				</div>

				<div className='grid-cols-md sm:grid-cols-2 lg:grid-cols-3'>
					{[product].map(product => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</Section>

			<div className='bg-accent'>
				<Section>
					<SectionHeading
						SUPER_TITLE={HOME.CATALOG.SUPER_TITLE}
						TITLE={HOME.CATALOG.TITLE}
						DESCRIPTION={HOME.CATALOG.DESCRIPTION}
					/>

					<div className='grid-cols-md lg:grid-cols-3'>
						{new Array(1).fill(null).map((_, index) => (
							<Link href='#' key={index}>
								<Card>
									<Image
										src={
											'https://s3.topstore.pro/demo-media/photos/019faac2-e310-764f-8afa-4b390d6a33f4/1.jpg'
										}
										alt='H'
										width={640}
										height={480}
										className='image rounded-none'
									/>

									<CardContent>
										<CardTitle>Категория</CardTitle>
									</CardContent>

									<CardFooter>
										<CardDescription>категория</CardDescription>
									</CardFooter>
								</Card>
							</Link>
						))}
					</div>
				</Section>
			</div>

			<Section isTwoColumn>
				<Image
					src={HOME.DELIVERY.IMAGE.SRC}
					alt={HOME.DELIVERY.IMAGE.ALT}
					width={960}
					height={720}
					className='image'
				/>

				<div className='flex-col-md'>
					<SectionHeading
						SUPER_TITLE={HOME.DELIVERY.SUPER_TITLE}
						TITLE={HOME.DELIVERY.TITLE}
						DESCRIPTION={HOME.DELIVERY.DESCRIPTION}
					/>

					<ul className='grid gap-3 sm:grid-cols-2'>
						{HOME.DELIVERY.INFO.map(({ TITLE, ICON }) => (
							<Item variant='outline' key={TITLE}>
								<ItemMedia variant='icon'>
									<Icon name={ICON} />
								</ItemMedia>
								<ItemContent>
									<ItemTitle>{TITLE}</ItemTitle>
								</ItemContent>
							</Item>
						))}
					</ul>

					<div className='flex-row-sm'>
						<Link
							href={HOME.DELIVERY.CATALOG_BUTTON.HREF}
							className={buttonVariants()}
						>
							{HOME.DELIVERY.CATALOG_BUTTON.TITLE}
						</Link>
						<Link
							href={HOME.DELIVERY.DELIVERY_BUTTON.HREF}
							className={buttonVariants({ variant: 'outline' })}
						>
							{HOME.DELIVERY.DELIVERY_BUTTON.TITLE}
						</Link>
					</div>
				</div>
			</Section>
		</main>
	)
}
