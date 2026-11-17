import { buttonVariants } from '@/components/ui/common/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/common/card'
import Section from '@/components/ui/custom/section'
import Text from '@/components/ui/custom/text'
import { CONFIG } from '@/constants/config.constant'
import Link from 'next/link'

export default function Admin() {
	const { ADMIN } = CONFIG

	return (
		<Section size='sm' isPaddingTop={false}>
			<div className='grid-cols-md'>
				{ADMIN.ITEMS({
					categories: 1,
					products: 2,
					users: 3,
				}).map(({ COUNT, DESCRIPTION, TITLE, HREF }) => (
					<Card key={HREF}>
						<CardHeader>
							<CardTitle>{TITLE}</CardTitle>
							<CardDescription>{DESCRIPTION}</CardDescription>
						</CardHeader>

						<CardContent className='flex-col-md'>
							<Text className='font-semibold text-2xl' text={`${COUNT}`} />

							<Link
								href={HREF}
								className={buttonVariants({ variant: 'outline' })}
							>
								{ADMIN.OPEN_BUTTON}
							</Link>
						</CardContent>
					</Card>
				))}
			</div>
		</Section>
	)
}
