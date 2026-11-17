import type { IBaseModel } from './base-model.type'

export interface ICategory extends IBaseModel {
	title: string
	image_url: string
	count_products: number
}
