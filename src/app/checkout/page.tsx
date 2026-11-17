import Checkout from '@/components/screens/checkout/Checkout'
import { CONFIG } from '@/constants/config.constant'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: CONFIG.CHECKOUT.METADATA.TITLE,
	description: CONFIG.CHECKOUT.METADATA.DESCRIPTION,
}

export default function Page() {
	return <Checkout />
}
