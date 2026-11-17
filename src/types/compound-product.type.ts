import type { IBaseModel } from './base-model.type'

export interface ICompoundProduct extends IBaseModel {
	title: string
	quantity: number
	product_id: string
}
