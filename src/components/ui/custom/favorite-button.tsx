import { Button } from '../common/button'
import Icon from './icon'

export default function FavoriteButton() {
	return (
		<Button variant='outline' size='icon-lg'>
			<Icon name='Heart' />
		</Button>
	)
}
