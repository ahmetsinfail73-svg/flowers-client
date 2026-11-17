import Home from '@/components/screens/home/Home'
import { CONFIG } from '@/constants/config.constant'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: CONFIG.HOME.METADATA.TITLE,
	description: CONFIG.HOME.METADATA.DESCRIPTION,
}

export default function Page() {
	return <Home />
}
