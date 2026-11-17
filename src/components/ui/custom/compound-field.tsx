'use client'

import { Button } from '@/components/ui/common/button'
import {
	FieldDescription,
	FieldError,
	FieldLegend,
	FieldSet,
} from '@/components/ui/common/field'
import { CONFIG } from '@/constants/config.constant'
import type {
	TypeCreateProductInput,
	TypeUpdateProductInput,
} from '@/schemas/product.schema'
import { registerNumber } from '@/utils/register-number.util'
import type { ComponentProps } from 'react'
import {
	useFieldArray,
	type Control,
	type FieldErrors,
	type UseFormRegister,
} from 'react-hook-form'
import Icon from './icon'
import InputField from './input-field'

type TypeFormValues = TypeCreateProductInput | TypeUpdateProductInput

interface IProps extends ComponentProps<'fieldset'> {
	label: string
	description?: string
	control: Control<TypeFormValues>
	register: UseFormRegister<TypeFormValues>
	errors?: FieldErrors<TypeFormValues>['compound']
}

export default function CompoundField({
	label,
	description,
	control,
	register,
	errors,
	...props
}: IProps) {
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'compound',
	})

	const { COMPOUND_FIELD } = CONFIG.UI

	const error = errors?.root?.message ?? errors?.message

	return (
		<FieldSet {...props}>
			<FieldLegend variant='label'>{label}</FieldLegend>

			{fields.map((item, index) => (
				<div key={item.id} className='flex-col-sm'>
					<div className='grid grid-cols-1 gap-2 sm:grid-cols-[7fr_3fr]'>
						<InputField
							label={COMPOUND_FIELD.NAME.LABEL}
							placeholder={COMPOUND_FIELD.NAME.PLACEHOLDER}
							{...register(`compound.${index}.name`)}
							error={errors?.[index]?.name?.message}
						/>
						<InputField
							label={COMPOUND_FIELD.QUANTITY.LABEL}
							placeholder={COMPOUND_FIELD.QUANTITY.PLACEHOLDER}
							type='number'
							{...registerNumber(register)(`compound.${index}.quantity`)}
							error={errors?.[index]?.quantity?.message}
						/>
					</div>

					<Button variant='destructive' onClick={() => remove(index)}>
						<Icon name='Trash' />

						{COMPOUND_FIELD.DELETE_BUTTON}
					</Button>
				</div>
			))}

			<Button
				variant='outline'
				onClick={() => append({ name: '', quantity: 0 })}
			>
				<Icon name='Plus' />

				{COMPOUND_FIELD.ADD_BUTTON}
			</Button>

			{description && <FieldDescription>{description}</FieldDescription>}

			{error && <FieldError>{error}</FieldError>}
		</FieldSet>
	)
}
