import type { IBaseModel } from './base-model.type'

export interface IOrder extends IBaseModel {
	number: number
	customer_id: string
	customer_name: string
	customer_phone: string
	customer_email: string
	recipient_name: string
	recipient_phone: string
	delivery_method: OrderDeliveryMethodEnum
	delivery_date: string
	delivery_time_start?: string
	delivery_time_end?: string
	shipping_address?: string
	comment?: string
	total_amount: number
	payment_status: OrderPaymentStatusEnum
	payment_id?: string
	payment_url?: string
	payment_key?: string
	expires_at: string
}

export enum OrderDeliveryMethodEnum {
	DELIVERY = 'delivery',
	PICKUP = 'pickup',
}

export enum OrderPaymentStatusEnum {
	PENDING = 'pending',
	PAID = 'paid',
	FULFILLING = 'fulfilling',
	FULFILLED = 'fulfilled',
	SHIPPING = 'shipping',
	DELIVERED = 'delivered',
	FAILED = 'failed',
	CANCELLED = 'cancelled',
}
