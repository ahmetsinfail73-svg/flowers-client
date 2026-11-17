import Catalog from '@/components/screens/catalog/Catalog'
import { CONFIG } from '@/constants/config.constant'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: CONFIG.CATALOG.METADATA.TITLE,
	description: CONFIG.CATALOG.METADATA.DESCRIPTION,
}

export default function Page() {
	return <Catalog />
}
