'use client'

import {
	Field,
	FieldDescription,
	FieldError,
	FieldLabel,
} from '@/components/ui/common/field'
import { formatPhone } from '@/utils/format-phone.util'
import { useId, useState, type ComponentProps } from 'react'
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from '../common/input-group'
import Icon from './icon'

interface IProps extends ComponentProps<'input'> {
	error?: string
	description?: string
	value?: string
	label: string
}

export default function InputField({
	error,
	description,
	label,
	required = true,
	type = 'text',
	value,
	onChange,
	...props
}: IProps) {
	const id = useId()

	const isPassword = type === 'password'

	const [inputType, setInputType] = useState(type)

	const isPhone = type === 'tel'

	return (
		<Field>
			<FieldLabel htmlFor={id}>{label}</FieldLabel>

			<InputGroup>
				<InputGroupInput
					id={id}
					type={inputType}
					inputMode={isPhone ? 'tel' : props.inputMode}
					autoComplete={isPhone ? 'tel' : props.autoComplete}
					required={required}
					aria-invalid={!!error}
					onChange={event => {
						if (isPhone) event.target.value = formatPhone(event.target.value)
						onChange?.(event)
					}}
					value={isPhone && value !== undefined ? formatPhone(value) : value}
					{...props}
				/>
				{isPassword && (
					<InputGroupAddon className='cursor-pointer' align='inline-end'>
						<InputGroupButton
							onClick={() =>
								setInputType(inputType === 'password' ? 'text' : 'password')
							}
							size='icon-xs'
						>
							<Icon name={inputType === 'password' ? 'Eye' : 'EyeOff'} />
						</InputGroupButton>
					</InputGroupAddon>
				)}
			</InputGroup>

			{description && <FieldDescription>{description}</FieldDescription>}

			{error && <FieldError>{error}</FieldError>}
		</Field>
	)
}
