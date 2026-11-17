'use client'

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/components/ui/common/card'
import { Separator } from '@/components/ui/common/separator'
import AddressSuggestions from '@/components/ui/custom/address-suggestions'
import InputField from '@/components/ui/custom/input-field'
import RadioGroup from '@/components/ui/custom/radio-group'
import Section from '@/components/ui/custom/section'
import SectionHeading from '@/components/ui/custom/section-heading'
import SwitchField from '@/components/ui/custom/switch-field'
import Text from '@/components/ui/custom/text'
import TextareaField from '@/components/ui/custom/textarea-field'
import Form from '@/components/ui/forms/form'
import SubmitButton from '@/components/ui/forms/submit-button'
import { CONFIG } from '@/constants/config.constant'
import {
	createOrderSchema,
	type TypeCreateOrderInput,
} from '@/schemas/order.schema'
import type { ICartItem } from '@/store/cart.store'
import { OrderDeliveryMethodEnum } from '@/types/order.type'
import { formatPrice } from '@/utils/format-price.util'
import { zodResolver } from '@hookform/resolvers/zod'
import { useId, useState } from 'react'
import { Controller, useForm, useWatch } from 'react-hook-form'
import { product } from '../product/Product'
import CartItem from './cart-item/CartItem'

export default function Checkout() {
	const formId = useId()
	const { CHECKOUT } = CONFIG

	const [isCustomer, setIsCustomer] = useState(true)
	const [isRecipient, setIsRecipient] = useState(false)

	const {
		handleSubmit,
		control,
		register,
		formState: { errors },
	} = useForm<TypeCreateOrderInput>({
		resolver: zodResolver(createOrderSchema),
		defaultValues: {
			comment: '',
			items: [],
			payment_key: '',
			delivery_method: OrderDeliveryMethodEnum.DELIVERY,
			customer_email: '',
			recipient_name: '',
			recipient_phone: '',
			shipping_address: '',
			delivery_date: '',
			delivery_time_start: '',
			delivery_time_end: '',
			customer_name: '',
			customer_phone: '',
		},
	})

	const deliveryMethod = useWatch({
		control,
		name: 'delivery_method',
	})

	const onSubmit = (data: TypeCreateOrderInput) => {}

	return (
		<Section size='sm'>
			<SectionHeading level={1} {...CHECKOUT} />

			<div className='grid-columns-2'>
				<Form id={formId} onSubmit={handleSubmit(onSubmit)}>
					<Card>
						<CardHeader>
							<CardTitle>{CHECKOUT.CUSTOMER_TITLE}</CardTitle>
						</CardHeader>

						<CardContent className='flex-col-md'>
							<SwitchField
								label={CHECKOUT.CUSTOMER_FROM_PROFILE}
								checked={isCustomer}
								onCheckedChange={setIsCustomer}
							/>

							{!isCustomer && (
								<>
									<InputField
										{...register('customer_name')}
										label={CONFIG.ORDER.CUSTOMER_NAME}
										placeholder={CONFIG.FORMS.ORDER.CUSTOMER_NAME}
										error={errors.customer_name?.message}
									/>

									<Controller
										name='customer_phone'
										control={control}
										render={({ field, fieldState }) => (
											<InputField
												label={CONFIG.ORDER.CUSTOMER_PHONE}
												placeholder={CONFIG.FORMS.ORDER.CUSTOMER_PHONE}
												{...field}
												error={fieldState.error?.message}
												type='tel'
											/>
										)}
									/>
								</>
							)}

							<InputField
								{...register('customer_email')}
								label={CONFIG.ORDER.CUSTOMER_EMAIL}
								placeholder={CONFIG.FORMS.ORDER.CUSTOMER_EMAIL}
								error={errors.customer_email?.message}
							/>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>{CHECKOUT.RECIPIENT_TITLE}</CardTitle>
						</CardHeader>
						<CardContent className='flex-col-md'>
							<SwitchField
								label={CHECKOUT.RECIPIENT_FROM_PROFILE}
								checked={isRecipient}
								onCheckedChange={setIsRecipient}
							/>

							{!isRecipient && (
								<>
									<InputField
										{...register('recipient_name')}
										label={CONFIG.ORDER.RECIPIENT_NAME}
										placeholder={CONFIG.FORMS.ORDER.RECIPIENT_NAME}
										error={errors.recipient_name?.message}
									/>

									<Controller
										name='recipient_phone'
										control={control}
										render={({ field, fieldState }) => (
											<InputField
												label={CONFIG.ORDER.RECIPIENT_PHONE}
												placeholder={CONFIG.FORMS.ORDER.RECIPIENT_PHONE}
												{...field}
												error={fieldState.error?.message}
												type='tel'
											/>
										)}
									/>
								</>
							)}
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>{CHECKOUT.DELIVERY_TITLE}</CardTitle>
						</CardHeader>
						<CardContent className='flex-col-md'>
							<Controller
								name='delivery_method'
								control={control}
								render={({ field, fieldState }) => (
									<RadioGroup
										{...field}
										error={fieldState.error?.message}
										items={CONFIG.ORDER.DELIVERY_METHOD}
									/>
								)}
							/>

							{deliveryMethod === OrderDeliveryMethodEnum.DELIVERY && (
								<Controller
									name='shipping_address'
									control={control}
									render={({ field, fieldState }) => (
										<AddressSuggestions
											{...field}
											value={field.value as string}
											label={CONFIG.ORDER.SHIPPING_ADDRESS}
											placeholder={CONFIG.FORMS.ORDER.SHIPPING_ADDRESS}
											error={fieldState.error?.message}
										/>
									)}
								/>
							)}

							<InputField
								{...register('delivery_date')}
								label={CONFIG.ORDER.DELIVERY_DATE}
								error={errors.delivery_date?.message}
								type='date'
							/>

							<div className='flex-row-sm sm:flex-nowrap'>
								<InputField
									{...register('delivery_time_start')}
									label={CONFIG.ORDER.DELIVERY_TIME_START}
									error={errors.delivery_time_start?.message}
									type='time'
								/>

								<InputField
									{...register('delivery_time_end')}
									label={CONFIG.ORDER.DELIVERY_TIME_END}
									error={errors.delivery_time_end?.message}
									type='time'
								/>
							</div>

							<TextareaField
								{...register('comment')}
								label={CONFIG.ORDER.COMMENT}
								placeholder={CONFIG.FORMS.ORDER.COMMENT}
								error={errors.comment?.message}
							/>
						</CardContent>
					</Card>
				</Form>

				<Card>
					<CardHeader>
						<CardTitle>{CHECKOUT.SUMMARY_TITLE}</CardTitle>
					</CardHeader>
					<CardContent className='flex-col-md'>
						<div className='flex-col-sm'>
							{([{ product, quantity: 1 }] as ICartItem[]).map(item => (
								<CartItem item={item} key={item.quantity} />
							))}
						</div>

						<Separator />

						<div className='flex-center-between gap-4'>
							<Text text={CHECKOUT.TOTAL_LABEL} className='font-medium' />

							<Text className='font-semibold' text={formatPrice(31300)} />
						</div>

						<SubmitButton form={formId}>{CHECKOUT.SUBMIT_BUTTON}</SubmitButton>
					</CardContent>
				</Card>
			</div>
		</Section>
	)
}
