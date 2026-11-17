import EditProfile from '@/components/screens/edit-profile/EditProfile'
import { CONFIG } from '@/constants/config.constant'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: CONFIG.PROFILE_EDIT.METADATA.TITLE,
	description: CONFIG.PROFILE_EDIT.METADATA.DESCRIPTION,
}

export default function Page() {
	return <EditProfile />
}
