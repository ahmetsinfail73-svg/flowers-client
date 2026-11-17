import Admin from '@/components/screens/admin/Admin'
import { CONFIG } from '@/constants/config.constant'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: CONFIG.ADMIN.METADATA.TITLE,
	description: CONFIG.ADMIN.METADATA.DESCRIPTION,
}

export default function Page() {
	return <Admin />
}
