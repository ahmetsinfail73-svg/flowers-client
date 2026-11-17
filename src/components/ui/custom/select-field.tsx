'use client'

import {
	Field,
	FieldDescription,
	FieldError,
	FieldLabel,
} from '@/components/ui/common/field'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/common/select'
import type { ISelectItem } from '@/constants/config.constant'
import { Select as SelectPrimitive } from '@base-ui/react/select'
import { useId } from 'react'

interface IProps extends Omit<SelectPrimitive.Root.Props<string>, 'items'> {
	error?: string
	description?: string
	placeholder?: string
	label: string
	items: ISelectItem[]
}

export default function SelectField({
	error,
	description,
	label,
	placeholder,
	required = true,
	items,
	...props
}: IProps) {
	const id = useId()

	return (
		<Field>
			<FieldLabel htmlFor={id}>{label}</FieldLabel>

			<Select
				required={required}
				items={items.map(({ TITLE, VALUE }) => ({
					value: VALUE,
					label: TITLE,
				}))}
				{...props}
			>
				<SelectTrigger aria-invalid={!!error} id={id}>
					<SelectValue placeholder={placeholder} />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{items.map(({ TITLE, VALUE }) => (
							<SelectItem key={VALUE} value={VALUE}>
								{TITLE}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>

			{description && <FieldDescription>{description}</FieldDescription>}

			{error && <FieldError>{error}</FieldError>}
		</Field>
	)
}
