import z from 'zod'

export const title = z
	.string('Название должно быть строкой')
	.trim()
	.min(2, 'Название должно содержать минимум 2 символа')
	.max(50, 'Название не должно превышать 50 символов')

export const image_url = z
	.string('Адрес изображения должен быть строкой')
	.trim()
	.url('Некорректный адрес изображения')
	.refine(
		value => /^https?:\/\//.test(value),
		'Изображение должно иметь HTTP или HTTPS адрес',
	)

export const uuid = z
	.string('Айди должен быть строкой')
	.trim()
	.uuid('Некорректный айди')

export const count = z
	.number('Количество должно быть числом')
	.int('Количество должно быть целым числом')
	.positive('Количество должно быть больше нуля')
