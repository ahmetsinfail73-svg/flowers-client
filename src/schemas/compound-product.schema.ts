import z from 'zod'
import { count, title } from './base.schema'

export const compoundProductSchema = z.object({
	name: title,
	quantity: count,
})
