import { CONFIG } from '@/constants/config.constant'
import { Button } from '../common/button'

export default function CartButton() {
	return <Button size='lg'>{CONFIG.UI.CART_BUTTON.TITLE}</Button>
}
