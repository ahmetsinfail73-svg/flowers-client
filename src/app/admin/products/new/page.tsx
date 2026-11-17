import ProductForm from '@/components/ui/forms/product-form'
import { CONFIG } from '@/constants/config.constant'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: CONFIG.NEW_PRODUCT.METADATA.TITLE,
	description: CONFIG.NEW_PRODUCT.METADATA.DESCRIPTION,
}

export default function Page() {
	return <ProductForm title={CONFIG.NEW_PRODUCT.TITLE} />
}
