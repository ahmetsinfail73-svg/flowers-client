import Cart from '@/components/screens/cart/Cart'
import { CONFIG } from '@/constants/config.constant'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: CONFIG.CART.METADATA.TITLE,
	description: CONFIG.CART.METADATA.DESCRIPTION,
}

export default function Page() {
	return <Cart />
}
