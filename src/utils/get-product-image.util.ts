import { CONFIG } from '@/constants/config.constant'
import type { IProduct } from '@/types/product.type'

export const getProductImage = (product: IProduct) => {
	return product.image_urls[0] || CONFIG.APP.IMAGE_NOT_FOUND
}
