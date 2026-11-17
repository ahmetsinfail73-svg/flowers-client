'use client'

import type { IFullTextSelectItem } from '@/constants/config.constant'
import { RadioGroup as RadioGroupPrimitive } from '@base-ui/react/radio-group'
import {
	Field,
	FieldContent,
	FieldDescription,
	FieldError,
	FieldLabel,
	FieldTitle,
} from '../common/field'
import {
	RadioGroup as RadioGroupComponent,
	RadioGroupItem,
} from '../common/radio-group'

interface IProps extends RadioGroupPrimitive.Props {
	items: IFullTextSelectItem[]
	error?: string
}

export default function RadioGroup({ items, error, ...props }: IProps) {
	return (
		<RadioGroupComponent {...props}>
			<div className='flex-row-sm sm:flex-nowrap'>
				{items.map(({ TITLE, VALUE, DESCRIPTION }) => (
					<FieldLabel htmlFor={VALUE} key={VALUE}>
						<Field orientation='horizontal'>
							<FieldContent>
								<FieldTitle>{TITLE}</FieldTitle>
								<FieldDescription>{DESCRIPTION}</FieldDescription>
							</FieldContent>
							<RadioGroupItem value={VALUE} id={VALUE} />
						</Field>
					</FieldLabel>
				))}
			</div>

			{error && <FieldError>{error}</FieldError>}
		</RadioGroupComponent>
	)
}
