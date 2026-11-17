'use client'

import { Card, CardContent } from '@/components/ui/common/card'
import Section from '@/components/ui/custom/section'
import SectionHeading from '@/components/ui/custom/section-heading'
import { CONFIG } from '@/constants/config.constant'
import { PATH } from '@/constants/path.constant'
import {
	createCategorySchema,
	updateCategorySchema,
	type TypeCreateCategoryInput,
	type TypeUpdateCategoryInput,
} from '@/schemas/category.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import BackButton from '../custom/back-button'
import FileField from '../custom/file-field'
import InputField from '../custom/input-field'
import Form from './form'

interface IProps {
	title: string
	isUpdate?: boolean
	initialValues?: TypeCreateCategoryInput
}

export default function CategoryForm({
	title,
	isUpdate = false,
	initialValues,
}: IProps) {
	const schema = isUpdate ? updateCategorySchema : createCategorySchema

	const {
		handleSubmit,
		control,
		register,
		formState: { errors },
	} = useForm<TypeCreateCategoryInput | TypeUpdateCategoryInput>({
		resolver: zodResolver(schema),
		values: initialValues,
		defaultValues: { image_url: '', title: '' },
	})

	const onSubmit = (
		data: TypeCreateCategoryInput | TypeUpdateCategoryInput,
	) => {}

	return (
		<Section className='flex-center-center' size='sm'>
			<BackButton url={PATH.ADMIN_CATEGORIES} />

			<SectionHeading level={1} TITLE={title} />

			<Card className='w-full max-w-xl'>
				<CardContent>
					<Form onSubmit={handleSubmit(onSubmit)} button={title}>
						<InputField
							{...register('title')}
							label={CONFIG.CATEGORY.TITLE}
							placeholder={CONFIG.FORMS.CATEGORY.TITLE}
							error={errors.title?.message}
						/>

						<Controller
							name='image_url'
							control={control}
							render={({ field, fieldState }) => (
								<FileField
									label={CONFIG.CATEGORY.IMAGE_URL}
									error={fieldState.error?.message}
								/>
							)}
						/>
					</Form>
				</CardContent>
			</Card>
		</Section>
	)
}
