import CategoryForm from '@/components/ui/forms/category-form'
import { CONFIG } from '@/constants/config.constant'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: CONFIG.NEW_CATEGORY.METADATA.TITLE,
	description: CONFIG.NEW_CATEGORY.METADATA.DESCRIPTION,
}

export default function Page() {
	return <CategoryForm title={CONFIG.NEW_CATEGORY.TITLE} />
}
