'use client'

import { Card, CardContent } from '@/components/ui/common/card'
import Section from '@/components/ui/custom/section'
import SectionHeading from '@/components/ui/custom/section-heading'
import { CONFIG } from '@/constants/config.constant'
import { PATH } from '@/constants/path.constant'
import {
	createProductSchema,
	updateProductSchema,
	type TypeCreateProductInput,
	type TypeUpdateProductInput,
} from '@/schemas/product.schema'
import { registerNumber } from '@/utils/register-number.util'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import BackButton from '../custom/back-button'
import CompoundField from '../custom/compound-field'
import FileField from '../custom/file-field'
import InputField from '../custom/input-field'
import SelectField from '../custom/select-field'
import SwitchField from '../custom/switch-field'
import TextareaField from '../custom/textarea-field'
import Form from './form'

interface IProps {
	title: string
	isUpdate?: boolean
}

export default function ProductForm({ title, isUpdate = false }: IProps) {
	const schema = isUpdate ? updateProductSchema : createProductSchema

	const {
		handleSubmit,
		control,
		register,
		formState: { errors },
	} = useForm<TypeCreateProductInput | TypeUpdateProductInput>({
		resolver: zodResolver(schema),
		defaultValues: {
			category_id: '',
			image_urls: [],
			title: '',
			price: 0,
			description: '',
			compound: [],
			count: 0,
			is_ready: false,
			is_show: false,
		},
	})

	const onSubmit = (data: TypeCreateProductInput | TypeUpdateProductInput) => {}

	const regNumber = registerNumber(register)

	return (
		<Section className='flex-center-center' size='sm'>
			<BackButton url={PATH.ADMIN_PRODUCTS} />

			<SectionHeading level={1} TITLE={title} />

			<Card className='w-full max-w-xl'>
				<CardContent>
					<Form onSubmit={handleSubmit(onSubmit)} button={title}>
						<InputField
							{...register('title')}
							label={CONFIG.PRODUCT.TITLE}
							placeholder={CONFIG.FORMS.PRODUCT.TITLE}
							error={errors.title?.message}
						/>

						<TextareaField
							{...register('description')}
							label={CONFIG.PRODUCT.DESCRIPTION}
							placeholder={CONFIG.FORMS.PRODUCT.DESCRIPTION}
							error={errors.description?.message}
						/>

						<InputField
							{...regNumber('price')}
							label={CONFIG.PRODUCT.PRICE}
							placeholder={CONFIG.FORMS.PRODUCT.PRICE}
							error={errors.price?.message}
							type='number'
						/>

						<InputField
							{...regNumber('count')}
							label={CONFIG.PRODUCT.COUNT}
							placeholder={CONFIG.FORMS.PRODUCT.COUNT}
							error={errors.count?.message}
							type='number'
						/>

						<SwitchField
							{...register('is_show')}
							label={CONFIG.PRODUCT.IS_SHOW}
							error={errors.is_show?.message}
						/>

						<Controller
							name='image_urls'
							control={control}
							render={({ field, fieldState }) => (
								<FileField
									{...field}
									label={CONFIG.PRODUCT.IMAGE_URLS}
									error={fieldState.error?.message}
									multiple
								/>
							)}
						/>

						<Controller
							name='category_id'
							control={control}
							render={({ field, fieldState }) => (
								<SelectField
									{...field}
									items={[
										{
											TITLE: 'Букет невесты',
											VALUE: '1',
										},
										{
											TITLE: 'Букет из роз',
											VALUE: '2',
										},
									]}
									label={CONFIG.PRODUCT.CATEGORY_ID}
									placeholder={CONFIG.FORMS.PRODUCT.CATEGORY_ID}
									error={fieldState.error?.message}
								/>
							)}
						/>

						<SwitchField
							{...register('is_ready')}
							label={CONFIG.PRODUCT.IS_READY}
							error={errors.is_ready?.message}
						/>

						<CompoundField
							label={CONFIG.PRODUCT.COMPOUND}
							control={control}
							register={register}
							errors={errors.compound}
						/>
					</Form>
				</CardContent>
			</Card>
		</Section>
	)
}
