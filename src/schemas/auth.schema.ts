import z from 'zod'
import { name, password, phone_number } from './user.schema'

export const registerSchema = z.object({
	phone_number,
	name,
	password,
})

export const loginSchema = z.object({
	phone_number,
	password,
})

export type TypeRegisterInput = z.input<typeof registerSchema>
export type TypeLoginInput = z.input<typeof loginSchema>
