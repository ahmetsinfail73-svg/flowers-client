import AdminUsers from '@/components/screens/admin-users/AdminUsers'
import { CONFIG } from '@/constants/config.constant'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: CONFIG.ADMIN_USERS.METADATA.TITLE,
	description: CONFIG.ADMIN_USERS.METADATA.DESCRIPTION,
}

export default function Page() {
	return <AdminUsers />
}
