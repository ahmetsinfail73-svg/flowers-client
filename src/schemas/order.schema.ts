import { OrderDeliveryMethodEnum } from '@/types/order.type'
import z from 'zod'
import { orderItemSchema } from './order-item.schema'
import { name, phone_number } from './user.schema'

const optionalValue = (value: unknown) =>
	typeof value === 'string' ? value.trim() || undefined : value

const getCurrentDateTime = () => {
	const parts = Object.fromEntries(
		new Intl.DateTimeFormat('en-GB', {
			timeZone: 'Europe/Moscow',
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
			hourCycle: 'h23',
		})
			.formatToParts(new Date())
			.map(part => [part.type, part.value]),
	)

	return {
		date: `${parts.year}-${parts.month}-${parts.day}`,
		time: `${parts.hour}:${parts.minute}`,
	}
}

const time = z.iso.time({
	precision: -1,
	error: 'Некорректное время доставки',
})

export const createOrderSchema = z
	.object({
		customer_name: name,
		customer_phone: phone_number,
		customer_email: z
			.email('Некорректная почта')
			.trim()
			.max(254, 'Почта не должна превышать 254 символа'),

		recipient_name: name,
		recipient_phone: phone_number,

		delivery_method: z.enum(
			OrderDeliveryMethodEnum,
			'Некорректный способ доставки',
		),
		delivery_date: z.iso.date('Некорректная дата доставки'),
		delivery_time_start: time,
		delivery_time_end: time,
		shipping_address: z.preprocess(
			optionalValue,
			z
				.string('Адрес должен быть строкой')
				.trim()
				.min(5, 'Адрес должен содержать минимум 5 символов')
				.max(255, 'Адрес не должен превышать 255 символов')
				.optional(),
		),

		comment: z.preprocess(
			optionalValue,
			z
				.string('Комментарий должен быть строкой')
				.trim()
				.max(1000, 'Комментарий не должен превышать 1000 символов')
				.optional(),
		),

		items: z
			.array(orderItemSchema, 'Некорректный формат товаров')
			.min(1, 'Заказ должен содержать хотя бы один товар')
			.max(100, 'Заказ не может содержать более 100 товаров'),

		payment_key: z
			.string('Ключ оплаты должен быть строкой')
			.trim()
			.uuid('Некорректный ключ оплаты'),
	})
	.superRefine((data, ctx) => {
		if (
			data.delivery_method === OrderDeliveryMethodEnum.DELIVERY &&
			!data.shipping_address
		) {
			ctx.addIssue({
				code: 'custom',
				message: 'Некорректный адрес доставки',
				path: ['shipping_address'],
			})
		}

		if (data.delivery_time_start >= data.delivery_time_end) {
			ctx.addIssue({
				code: 'custom',
				message: 'Время окончания должно быть позже времени начала',
				path: ['delivery_time_end'],
			})
		}

		const now = getCurrentDateTime()

		if (data.delivery_date < now.date) {
			ctx.addIssue({
				code: 'custom',
				message: 'Дата доставки не может быть в прошлом',
				path: ['delivery_date'],
			})
		}

		if (
			data.delivery_date === now.date &&
			data.delivery_time_start <= now.time
		) {
			ctx.addIssue({
				code: 'custom',
				message: 'Время доставки не может быть в прошлом',
				path: ['delivery_time_start'],
			})
		}
	})

export type TypeCreateOrderInput = z.input<typeof createOrderSchema>
