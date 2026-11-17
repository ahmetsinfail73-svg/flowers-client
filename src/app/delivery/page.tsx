import Delivery from '@/components/screens/delivery/Delivery'
import { CONFIG } from '@/constants/config.constant'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: CONFIG.DELIVERY.METADATA.TITLE,
	description: CONFIG.DELIVERY.METADATA.DESCRIPTION,
}

export default function Page() {
	return <Delivery />
}
