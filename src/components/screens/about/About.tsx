import { buttonVariants } from '@/components/ui/common/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/common/card'
import MarkerList from '@/components/ui/custom/marker-list'
import Quote from '@/components/ui/custom/quote'
import Section from '@/components/ui/custom/section'
import SectionHeading from '@/components/ui/custom/section-heading'
import Text from '@/components/ui/custom/text'
import { CONFIG } from '@/constants/config.constant'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
	const { ABOUT } = CONFIG

	return (
		<main>
			<Section isTwoColumn>
				<div className='flex-col-md'>
					<SectionHeading
						level={1}
						SUPER_TITLE={ABOUT.SUPER_TITLE}
						TITLE={ABOUT.TITLE}
						DESCRIPTION={ABOUT.DESCRIPTION}
					/>

					<div className='flex-row-sm'>
						<Link href={ABOUT.CATALOG_BUTTON.HREF} className={buttonVariants()}>
							{ABOUT.CATALOG_BUTTON.TITLE}
						</Link>

						<Link
							href={ABOUT.DELIVERY_BUTTON.HREF}
							className={buttonVariants({ variant: 'outline' })}
						>
							{ABOUT.DELIVERY_BUTTON.TITLE}
						</Link>
					</div>
				</div>

				<Image
					src={ABOUT.IMAGE.SRC}
					alt={ABOUT.IMAGE.ALT}
					width={960}
					height={720}
					className='image'
				/>
			</Section>

			<div className='bg-accent'>
				<Section size='sm'>
					<MarkerList items={ABOUT.INFO} />
				</Section>
			</div>

			<Section>
				<SectionHeading
					TITLE={ABOUT.PLACE.TITLE}
					SUPER_TITLE={CONFIG.APP.ADDRESS}
				/>

				<div className='flex-col-md lg:flex-row lg:items-center'>
					<Image
						src={ABOUT.PLACE.IMAGE.SRC}
						alt={ABOUT.PLACE.IMAGE.ALT}
						width={960}
						height={720}
						className='image'
					/>

					<Text text={ABOUT.PLACE.DESCRIPTION} />
				</div>
			</Section>

			<div className='bg-accent'>
				<Section isTwoColumn>
					<Image
						src={ABOUT.COLLECT.IMAGE.SRC}
						alt={ABOUT.COLLECT.IMAGE.ALT}
						width={960}
						height={720}
						className='image'
					/>

					<div className='flex-col-md'>
						<SectionHeading TITLE={ABOUT.COLLECT.TITLE} />

						<Text text={ABOUT.COLLECT.DESCRIPTION} />
					</div>
				</Section>
			</div>

			<Section>
				<SectionHeading
					SUPER_TITLE={ABOUT.REVIEWS.SUPER_TITLE}
					TITLE={ABOUT.REVIEWS.TITLE}
				/>

				<ul className='grid-cols-md'>
					{ABOUT.REVIEWS.INFO.map(({ TITLE, DESCRIPTION }) => (
						<Card key={TITLE}>
							<CardHeader>
								<CardTitle>{TITLE}</CardTitle>
							</CardHeader>

							<CardContent>
								<CardDescription>{DESCRIPTION}</CardDescription>
							</CardContent>
						</Card>
					))}
				</ul>
			</Section>

			<div className='bg-accent'>
				<Section>
					<SectionHeading
						SUPER_TITLE={ABOUT.SHOP.SUPER_TITLE}
						TITLE={ABOUT.SHOP.TITLE}
					/>

					<div className='grid-cols-md'>
						{ABOUT.SHOP.INFO.map(({ IMAGE, TITLE, DESCRIPTION }) => (
							<Card key={TITLE}>
								<Image
									src={IMAGE.SRC}
									alt={IMAGE.ALT}
									width={640}
									height={480}
									className='image rounded-none'
								/>

								<CardHeader>
									<CardTitle>{TITLE}</CardTitle>
									<CardDescription>{DESCRIPTION}</CardDescription>
								</CardHeader>
							</Card>
						))}
					</div>
				</Section>
			</div>

			<Section>
				<Quote>{ABOUT.QUOTE}</Quote>
			</Section>

			<Section>
				<SectionHeading
					TITLE={ABOUT.ENTER.TITLE}
					DESCRIPTION={ABOUT.ENTER.DESCRIPTION}
				/>

				<div className='flex-row-sm'>
					<Link
						href={ABOUT.ENTER.CALL_BUTTON.HREF}
						className={buttonVariants()}
					>
						{ABOUT.ENTER.CALL_BUTTON.TITLE}
					</Link>

					<Link
						href={ABOUT.ENTER.MAP_BUTTON.HREF}
						target='_blank'
						className={buttonVariants({ variant: 'outline' })}
					>
						{ABOUT.ENTER.MAP_BUTTON.TITLE}
					</Link>
				</div>

				<iframe
					src={CONFIG.APP.GOOGLE_MAPS_EMBED_URL}
					title={ABOUT.ENTER.TITLE}
					loading='lazy'
					referrerPolicy='strict-origin-when-cross-origin'
					allowFullScreen
					className='image border md:aspect-16/7'
				/>
			</Section>
		</main>
	)
}
