import ProfileOrders from '@/components/screens/profile-orders/ProfileOrders'
import { CONFIG } from '@/constants/config.constant'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: CONFIG.PROFILE_ORDERS.METADATA.TITLE,
	description: CONFIG.PROFILE_ORDERS.METADATA.DESCRIPTION,
}

export default function Page() {
	return <ProfileOrders />
}
