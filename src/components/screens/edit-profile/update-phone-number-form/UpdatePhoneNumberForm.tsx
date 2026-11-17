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
	updatePhoneNumberSchema,
	type TypeUpdatePhoneNumberInput,
} from '@/schemas/user.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'

export default function UpdatePhoneNumberForm() {
	const { PROFILE_EDIT } = CONFIG

	const { handleSubmit, control } = useForm<TypeUpdatePhoneNumberInput>({
		resolver: zodResolver(updatePhoneNumberSchema),
		defaultValues: { phone_number: '' },
	})

	const onSubmit = (data: TypeUpdatePhoneNumberInput) => {}

	return (
		<Card>
			<CardHeader>
				<CardTitle>{PROFILE_EDIT.PHONE_FORM}</CardTitle>
			</CardHeader>

			<CardContent>
				<Form
					onSubmit={handleSubmit(onSubmit)}
					button={PROFILE_EDIT.SAVE_BUTTON}
				>
					<Controller
						name='phone_number'
						control={control}
						render={({ field, fieldState }) => (
							<InputField
								label={CONFIG.USER.PHONE_NUMBER}
								placeholder={CONFIG.FORMS.USER.PHONE}
								{...field}
								error={fieldState.error?.message}
								type='tel'
							/>
						)}
					/>
				</Form>
			</CardContent>
		</Card>
	)
}
