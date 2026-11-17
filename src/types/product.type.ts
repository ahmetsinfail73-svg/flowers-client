import type { IBaseModel } from './base-model.type'

export interface ICompoundProduct {
	name: string
	quantity: number
}

export interface IProduct extends IBaseModel {
	category_id?: string
	title: string
	price: number
	is_show: boolean
	count: number
	is_ready: boolean
	description?: string
	image_urls: string[]
	category: {
		title: string
		id: string
	}
	compound: ICompoundProduct[]
}
