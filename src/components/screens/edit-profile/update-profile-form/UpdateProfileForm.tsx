'use client'

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/components/ui/common/card'
import InputField from '@/components/ui/custom/input-field'
import Form from '@/components/ui/forms/form'
import { CONFIG } from '@/constants/config.constant'
import {
	updateProfileSchema,
	type TypeUpdateProfileInput,
} from '@/schemas/user.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export default function UpdateProfileForm() {
	const { PROFILE_EDIT } = CONFIG

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<TypeUpdateProfileInput>({
		resolver: zodResolver(updateProfileSchema),
		defaultValues: { name: '', old_password: '', new_password: '' },
	})

	const onSubmit = (data: TypeUpdateProfileInput) => {}

	return (
		<Card>
			<CardHeader>
				<CardTitle>{PROFILE_EDIT.FORM}</CardTitle>
			</CardHeader>

			<CardContent>
				<Form
					onSubmit={handleSubmit(onSubmit)}
					button={PROFILE_EDIT.SAVE_BUTTON}
				>
					<InputField
						{...register('name')}
						label={CONFIG.USER.NAME}
						placeholder={CONFIG.FORMS.USER.NAME}
						error={errors.name?.message}
					/>

					<InputField
						{...register('old_password')}
						type='password'
						label={CONFIG.USER.OLD_PASSWORD}
						placeholder={CONFIG.FORMS.USER.PASSWORD}
						error={errors.old_password?.message}
					/>

					<InputField
						{...register('new_password')}
						type='password'
						label={CONFIG.USER.NEW_PASSWORD}
						placeholder={CONFIG.FORMS.USER.PASSWORD}
						error={errors.new_password?.message}
					/>
				</Form>
			</CardContent>
		</Card>
	)
}
