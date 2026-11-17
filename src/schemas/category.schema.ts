import z from 'zod'
import { image_url, title } from './base.schema'

export const createCategorySchema = z.object({
	title,
	image_url,
})

export const updateCategorySchema = createCategorySchema.partial()

export type TypeCreateCategoryInput = z.input<typeof createCategorySchema>
export type TypeUpdateCategoryInput = z.input<typeof updateCategorySchema>
