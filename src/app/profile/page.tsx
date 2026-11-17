import Profile from '@/components/screens/profile/Profile'
import { CONFIG } from '@/constants/config.constant'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: CONFIG.PROFILE.METADATA.TITLE,
	description: CONFIG.PROFILE.METADATA.DESCRIPTION,
}

export default function Page() {
	return <Profile />
}
