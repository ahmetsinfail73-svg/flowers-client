import { isValidPhoneNumber } from 'react-phone-number-input'
import z from 'zod'

export const phone_number = z
	.string('Номер телефона должен быть строкой')
	.trim()
	.refine(isValidPhoneNumber, 'Некорректный номер телефона')

export const name = z
	.string('Имя должно быть строкой')
	.trim()
	.min(2, 'Имя должно содержать минимум 2 символа')
	.max(30, 'Имя не должно превышать 30 символов')

export const password = z
	.string('Пароль должен быть строкой')
	.trim()
	.min(8, 'Пароль должен содержать минимум 8 символов')
	.max(25, 'Пароль не должен превышать 25 символов')

export const updateProfileSchema = z.object({
	name,
	old_password: password,
	new_password: password,
})

export const updatePhoneNumberSchema = z.object({
	phone_number,
})

export type TypeUpdateProfileInput = z.input<typeof updateProfileSchema>
export type TypeUpdatePhoneNumberInput = z.input<typeof updatePhoneNumberSchema>
