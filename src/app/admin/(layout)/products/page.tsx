import AdminProducts from '@/components/screens/admin-products/AdminProducts'
import { CONFIG } from '@/constants/config.constant'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: CONFIG.ADMIN_PRODUCTS.METADATA.TITLE,
	description: CONFIG.ADMIN_PRODUCTS.METADATA.DESCRIPTION,
}

export default function Page() {
	return <AdminProducts />
}
