import Register from '@/components/screens/register/Register'
import { CONFIG } from '@/constants/config.constant'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: CONFIG.REGISTER.METADATA.TITLE,
	description: CONFIG.REGISTER.METADATA.DESCRIPTION,
}

export default function Page() {
	return <Register />
}
