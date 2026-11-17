import AdminCategories from '@/components/screens/admin-categories/AdminCategories'
import { CONFIG } from '@/constants/config.constant'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: CONFIG.ADMIN_CATEGORIES.METADATA.TITLE,
	description: CONFIG.ADMIN_CATEGORIES.METADATA.DESCRIPTION,
}

export default function Page() {
	return <AdminCategories />
}
