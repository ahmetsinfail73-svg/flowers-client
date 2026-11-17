'use client'

import { buttonVariants } from '@/components/ui/common/button'
import { Card, CardContent, CardFooter } from '@/components/ui/common/card'
import Section from '@/components/ui/custom/section'
import SectionHeading from '@/components/ui/custom/section-heading'
import { CONFIG } from '@/constants/config.constant'
import {
	loginSchema,
	registerSchema,
	type TypeLoginInput,
	type TypeRegisterInput,
} from '@/schemas/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { Controller, useForm } from 'react-hook-form'
import InputField from '../custom/input-field'
import Form from './form'

interface IProps {
	title: string
	otherTitle: string
	otherHref: string
	isRegister?: boolean
}

export default function AuthForm({
	title,
	otherTitle,
	otherHref,
	isRegister = false,
}: IProps) {
	const schema = isRegister ? registerSchema : loginSchema

	const {
		handleSubmit,
		control,
		register,
		formState: { errors },
	} = useForm<TypeLoginInput | TypeRegisterInput>({
		resolver: zodResolver(schema),
		defaultValues: { phone_number: '', name: '', password: '' },
	})

	const onSubmit = (data: TypeLoginInput | TypeRegisterInput) => {}

	return (
		<Section className='flex-center-center flex-col'>
			<SectionHeading
				level={1}
				TITLE={title}
				SUPER_TITLE={CONFIG.APP.NAME}
				className='text-center'
			/>

			<Card className='w-full max-w-lg'>
				<CardContent>
					<Form onSubmit={handleSubmit(onSubmit)} button={title}>
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

						{isRegister && (
							<InputField
								{...register('name')}
								label={CONFIG.USER.NAME}
								placeholder={CONFIG.FORMS.USER.NAME}
								error={'name' in errors ? errors.name?.message : undefined}
							/>
						)}

						<InputField
							{...register('password')}
							type='password'
							label={CONFIG.USER.PASSWORD}
							placeholder={CONFIG.FORMS.USER.PASSWORD}
							error={errors.password?.message}
						/>
					</Form>
				</CardContent>

				<CardFooter className='justify-center border-t'>
					<Link
						href={otherHref}
						className={buttonVariants({ variant: 'link' })}
					>
						{otherTitle}
					</Link>
				</CardFooter>
			</Card>
		</Section>
	)
}
