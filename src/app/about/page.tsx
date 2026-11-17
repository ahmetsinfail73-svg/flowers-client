import About from '@/components/screens/about/About'
import { CONFIG } from '@/constants/config.constant'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: CONFIG.ABOUT.METADATA.TITLE,
	description: CONFIG.ABOUT.METADATA.DESCRIPTION,
}

export default function Page() {
	return <About />
}
