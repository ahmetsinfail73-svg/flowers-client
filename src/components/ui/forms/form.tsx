import type { ReactNode, SubmitEventHandler } from 'react'
import SubmitButton from './submit-button'

interface IProps {
	id?: string
	children: ReactNode
	onSubmit: SubmitEventHandler<HTMLFormElement>
	button?: string
	isDisabled?: boolean
}

export default function Form({
	id,
	children,
	onSubmit,
	button,
	isDisabled,
}: IProps) {
	return (
		<form id={id} className='flex-col-md' noValidate onSubmit={onSubmit}>
			{children}

			{button && <SubmitButton disabled={isDisabled}>{button}</SubmitButton>}
		</form>
	)
}
