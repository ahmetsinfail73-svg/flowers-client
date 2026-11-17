import z from 'zod'
import { image_url, title, uuid } from './base.schema'
import { compoundProductSchema } from './compound-product.schema'

export const createProductSchema = z.object({
	category_id: uuid,
	title,
	price: z
		.number('Цена должна быть числом')
		.positive('Цена должна быть больше нуля')
		.refine(
			value => /^\d+(?:\.\d{1,2})?$/.test(String(value)),
			'Цена может содержать не более 2 знаков после запятой',
		),
	is_show: z.boolean('Некорректная видимость товара'),
	count: z
		.number('Количество должно быть числом')
		.int('Количество должно быть целым числом')
		.min(0, 'Количество должно быть больше или равно нулю'),
	is_ready: z.boolean('Некорректная видимость на витрине'),
	description: z
		.string('Описание должно быть строкой')
		.trim()
		.max(255, 'Описание не должно превышать 255 символов')
		.optional(),
	image_urls: z.array(image_url, 'Некорректный формат изображений').optional(),
	compound: z
		.array(compoundProductSchema, 'Некорректный формат продуктов')
		.min(1, 'Состав должен содержать хотя бы один элемент')
		.max(100, 'Состав не может содержать более 100 элементов')
		.optional(),
})

export const updateProductSchema = createProductSchema.partial()

export type TypeCreateProductInput = z.input<typeof createProductSchema>
export type TypeUpdateProductInput = z.input<typeof updateProductSchema>
