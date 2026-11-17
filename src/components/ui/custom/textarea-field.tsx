'use client'

import {
	Field,
	FieldDescription,
	FieldError,
	FieldLabel,
} from '@/components/ui/common/field'
import { useId, type ComponentProps } from 'react'
import { Textarea } from '../common/textarea'

interface IProps extends ComponentProps<'textarea'> {
	error?: string
	description?: string
	value?: string
	label: string
}

export default function TextareaField({
	error,
	description,
	label,
	required = true,
	...props
}: IProps) {
	const id = useId()

	return (
		<Field>
			<FieldLabel htmlFor={id}>{label}</FieldLabel>

			<Textarea id={id} required={required} aria-invalid={!!error} {...props} />

			{description && <FieldDescription>{description}</FieldDescription>}

			{error && <FieldError>{error}</FieldError>}
		</Field>
	)
}
