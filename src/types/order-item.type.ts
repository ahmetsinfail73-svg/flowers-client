import type { IBaseModel } from './base-model.type'

export interface IOrderItem extends IBaseModel {
	order_id: string
	product_id: string
	product_title: string
	quantity: number
	unit_price: number
}
