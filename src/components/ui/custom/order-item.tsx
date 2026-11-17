import { Badge } from '@/components/ui/common/badge'
import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from '@/components/ui/common/card'
import Icon from '@/components/ui/custom/icon'
import { CONFIG } from '@/constants/config.constant'
import {
	OrderDeliveryMethodEnum,
	OrderPaymentStatusEnum,
	type IOrder,
} from '@/types/order.type'
import { formatPrice } from '@/utils/format-price.util'
import Link from 'next/link'
import Text from './text'

const ORDER: IOrder = {
	id: '12',
	created_at: '2023-08-01T12:00:00Z',
	customer_id: '12345',
	customer_name: 'John Doe',
	customer_phone: '+1234567890',
	customer_email: '',
	recipient_name: 'Jane Smith',
	recipient_phone: '+0987654321',
	delivery_method: OrderDeliveryMethodEnum.DELIVERY,
	delivery_date: '2023-08-02',
	delivery_time_start: '10:00',
	delivery_time_end: '12:00',
	expires_at: '2023-08-02T12:00:00Z',
	shipping_address: '123 Main St, City, Country',
	comment: 'Please leave the package at the front door.',
	total_amount: 100.0,
	payment_status: OrderPaymentStatusEnum.FULFILLING,
	number: 1001,
}

interface IProps {
	order?: IOrder
}

// TODO

export default function OrderItem({ order = ORDER }: IProps) {
	const { ORDER_ITEM } = CONFIG.UI

	return (
		<Link href={''}>
			<Card size='sm'>
				<CardContent className='flex-col-sm sm:flex-row sm:flex-center-between  sm:gap-5'>
					<div className='flex-row-sm'>
						<div className='flex-center-center size-10 rounded-full bg-accent text-primary'>
							<Icon name={ORDER_ITEM.ICON[order.delivery_method]} mode='m' />
						</div>

						<div className='flex-col-sm'>
							<div className='flex-row-sm items-center'>
								<CardTitle className='font-semibold'>
									{ORDER_ITEM.TITLE(order.number)}
								</CardTitle>

								<Badge
									variant='secondary'
									style={{
										color: ORDER_ITEM.STATUS[order.payment_status].COLOR,
									}}
								>
									{ORDER_ITEM.STATUS[order.payment_status].TITLE}
								</Badge>
							</div>

							<CardDescription>{ORDER_ITEM.DESCRIPTION(order)}</CardDescription>
						</div>
					</div>

					<Text
						className='font-semibold'
						text={formatPrice(order.total_amount)}
					/>
				</CardContent>
			</Card>
		</Link>
	)
}
