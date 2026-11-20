import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/common/accordion'
import { buttonVariants } from '@/components/ui/common/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/common/card'
import Icon from '@/components/ui/custom/icon'
import Section from '@/components/ui/custom/section'
import SectionHeading from '@/components/ui/custom/section-heading'
import { CONFIG } from '@/constants/config.constant'
import Image from 'next/image'
import Link from 'next/link'

export default function Delivery() {
	const { DELIVERY } = CONFIG

	return (
        <main>
			<Section>
				<SectionHeading
					TITLE={DELIVERY.WORK.TITLE}
				/>

				<ol className='grid-cols-md lg:grid-cols-4'>
					{DELIVERY.WORK.INFO.map(({ TITLE, DESCRIPTION }, index) => (
						<Card key={TITLE}>
							<CardHeader>
								<span className='text-3xl text-primary'>
									{String(index + 1)}
								</span>
							</CardHeader>

							<CardContent>
								<CardTitle>{TITLE}</CardTitle>
							</CardContent>

							<CardFooter>
								<CardDescription>{DESCRIPTION}</CardDescription>
							</CardFooter>
						</Card>
					))}
				</ol>
			</Section>

			<div className='bg-accent'>
				<Section>
					<SectionHeading
						TITLE={DELIVERY.WORK.CONDITIONS.TITLE}
						DESCRIPTION={DELIVERY.WORK.CONDITIONS.DESCRIPTION}
					/>

					<dl className='grid-cols-md lg:grid-cols-3'>
						{DELIVERY.WORK.CONDITIONS.INFO.map(({ TITLE, DESCRIPTION }) => (
							<Card key={TITLE}>
								<CardContent>
									<CardTitle>{TITLE}</CardTitle>
								</CardContent>

								<CardFooter>
									<CardDescription>{DESCRIPTION}</CardDescription>
								</CardFooter>
							</Card>
						))}
					</dl>
				</Section>
			</div>

			<Section isTwoColumn>
				<Image
					src={DELIVERY.IMPORTANT.IMAGE.SRC}
					alt={DELIVERY.IMPORTANT.IMAGE.ALT}
					width={960}
					height={720}
					className='image'
				/>

				<div className='flex-col-md'>
					<SectionHeading
						SUPER_TITLE={DELIVERY.IMPORTANT.SUPER_TITLE}
						TITLE={DELIVERY.IMPORTANT.TITLE}
					/>

					<ul className='grid-cols-md lg:grid-cols-2'>
						{DELIVERY.IMPORTANT.INFO.map(({ TITLE, DESCRIPTION, ICON }) => (
							<Card key={TITLE}>
								<CardContent className='flex-col-md'>
									<Icon name={ICON} />

									<CardTitle>{TITLE}</CardTitle>
								</CardContent>

								<CardFooter>
									<CardDescription>{DESCRIPTION}</CardDescription>
								</CardFooter>
							</Card>
						))}
					</ul>
				</div>
			</Section>

			<div className='bg-accent'>
				<Section>
					<SectionHeading
						SUPER_TITLE={DELIVERY.QUESTIONS.SUPER_TITLE}
						TITLE={DELIVERY.QUESTIONS.TITLE}
					/>

					<Accordion>
						{DELIVERY.QUESTIONS.INFO.map(({ TITLE, DESCRIPTION }) => (
							<AccordionItem key={TITLE} value={TITLE}>
								<AccordionTrigger>{TITLE}</AccordionTrigger>
								<AccordionContent>
									<p>{DESCRIPTION}</p>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</Section>
			</div>

			<Section>
				<div>
					<SectionHeading
						TITLE={DELIVERY.ALERT.TITLE}
						DESCRIPTION={DELIVERY.ALERT.DESCRIPTION}
						className='items-center text-center'
					/>
				</div>

				<div className='flex-center-center'>
					<Link
						href={DELIVERY.ALERT.CATALOG_BUTTON.HREF}
						className={buttonVariants()}
					>
						{DELIVERY.ALERT.CATALOG_BUTTON.TITLE}
					</Link>
				</div>
			</Section>
		</main>
	)
}
