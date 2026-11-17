'use client'

import { Field, FieldError, FieldLabel } from '@/components/ui/common/field'
import { Switch as SwitchPrimitive } from '@base-ui/react/switch'
import { useId } from 'react'
import { Switch } from '../common/switch'

interface IProps extends SwitchPrimitive.Root.Props {
	error?: string
	label: string
}

export default function SwitchField({ error, label, ...props }: IProps) {
	const id = useId()

	return (
		<Field orientation='horizontal' className='w-fit'>
			<Switch id={id} {...props} />

			<FieldLabel htmlFor={id}>{label}</FieldLabel>

			{error && <FieldError>{error}</FieldError>}
		</Field>
	)
}
