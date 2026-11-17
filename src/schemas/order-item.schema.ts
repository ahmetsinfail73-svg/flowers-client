import z from 'zod'
import { count, uuid } from './base.schema'

export const orderItemSchema = z.object({
	product_id: uuid,
	quantity: count,
})
