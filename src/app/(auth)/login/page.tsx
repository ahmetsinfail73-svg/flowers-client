import Login from '@/components/screens/login/Login'
import { CONFIG } from '@/constants/config.constant'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: CONFIG.LOGIN.METADATA.TITLE,
	description: CONFIG.LOGIN.METADATA.DESCRIPTION,
}

export default function Page() {
	return <Login />
}
