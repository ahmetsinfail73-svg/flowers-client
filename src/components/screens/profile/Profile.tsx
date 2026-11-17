import { Button } from '@/components/ui/common/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/common/card'
import Text from '@/components/ui/custom/text'
import { CONFIG } from '@/constants/config.constant'
import type { IUser } from '@/types/user.type'

export default function Profile() {
	const { PROFILE } = CONFIG

	return (
		<Card>
			<CardHeader>
				<CardTitle>{PROFILE.DETAILS.TITLE}</CardTitle>
				<CardDescription>{PROFILE.DETAILS.DESCRIPTION}</CardDescription>
			</CardHeader>
			<CardContent>
				<dl className='flex-col-sm'>
					{PROFILE.DETAILS.INFO({
						name: 'Иван Иванов',
						phone_number: '+7 (999) 123-45-67',
					} as IUser).map(({ TITLE, DESCRIPTION }) => (
						<div key={TITLE} className='flex-col-sm border-b'>
							<p className='text-muted-foreground'>{TITLE}</p>

							<Text text={DESCRIPTION} />
						</div>
					))}
				</dl>
			</CardContent>

			<CardFooter>
				<Button variant='destructive'>{PROFILE.LOGOUT_BUTTON}</Button>
			</CardFooter>
		</Card>
	)
}
