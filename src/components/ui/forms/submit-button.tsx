import type { ComponentProps, ReactNode } from 'react'
import { Button } from '../common/button'

interface IProps extends ComponentProps<'button'> {
	children: ReactNode
}

export default function SubmitButton({ children, ...props }: IProps) {
	return (
		<Button {...props} size='lg' type='submit'>
			{children}
		</Button>
	)
}
