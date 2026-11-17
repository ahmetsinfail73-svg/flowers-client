'use client'

import { Button } from '@/components/ui/common/button'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from '@/components/ui/common/carousel'
import { CONFIG } from '@/constants/config.constant'
import { cn } from 'cn'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface IProps {
	images: string[]
	title: string
}

export default function ProductGallery({ images, title }: IProps) {
	const items = images.length > 1 ? images : [CONFIG.APP.IMAGE_NOT_FOUND]

	const [api, setApi] = useState<CarouselApi>()
	const [thumbnailsApi, setThumbnailsApi] = useState<CarouselApi>()
	const [selected, setSelected] = useState(0)

	useEffect(() => {
		if (!api) return
		const updateSelected = () => setSelected(api.selectedScrollSnap())
		updateSelected()
		api.on('select', updateSelected)
		return () => {
			api.off('select', updateSelected)
		}
	}, [api])

	useEffect(() => {
		thumbnailsApi?.scrollTo(selected)
	}, [selected, thumbnailsApi])

	return (
		<div className='flex-col-sm'>
			<Carousel
				setApi={setApi}
				opts={{ loop: images.length > 1 }}
				className='overflow-hidden rounded-2xl border bg-card'
			>
				<CarouselContent>
					{items.map((src, index) => (
						<CarouselItem key={src}>
							<Image
								src={src}
								alt={title}
								width={900}
								height={900}
								loading={index === 0 ? 'eager' : 'lazy'}
								unoptimized
								className='image aspect-square'
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				{images.length > 1 && (
					<>
						<CarouselPrevious className='left-4 z-10' />
						<CarouselNext className='right-4 z-10' />
					</>
				)}
			</Carousel>

			{images.length > 1 && (
				<Carousel
					setApi={setThumbnailsApi}
					opts={{ align: 'start', containScroll: 'trimSnaps' }}
					className='px-9'
				>
					<CarouselContent className='ml-0'>
						{images.map((src, index) => (
							<CarouselItem
								key={src}
								className='basis-1/3 pl-0 pr-2 sm:basis-1/4 lg:basis-1/5'
							>
								<Button
									type='button'
									variant='ghost'
									onClick={() => api?.scrollTo(index)}
									className={cn(
										'h-auto w-full rounded-2xl p-0 border-2 overflow-hidden transition-colors',
										selected === index && 'border-primary',
									)}
								>
									<Image
										src={src}
										alt={title}
										width={96}
										height={96}
										unoptimized
										className='image aspect-square rounded-none'
									/>
								</Button>
							</CarouselItem>
						))}
					</CarouselContent>

					<CarouselPrevious className='left-0' />
					<CarouselNext className='right-0' />
				</Carousel>
			)}
		</div>
	)
}
