'use client'

import { dadataService } from '@/api/services/dadata.service'
import {
	Combobox,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
	ComboboxList,
	useComboboxAnchor,
} from '@/components/ui/common/combobox'
import { Field, FieldError, FieldLabel } from '@/components/ui/common/field'
import { InputGroupAddon } from '@/components/ui/common/input-group'
import Icon from '@/components/ui/custom/icon'
import { CONFIG } from '@/constants/config.constant'
import { useDebounce } from '@/hooks/use-debounce.hook'
import type { IDadataSuggestion } from '@/types/dadata.type'
import { useQuery } from '@tanstack/react-query'
import { useId, useState, type ComponentProps } from 'react'

interface IProps extends Omit<ComponentProps<'input'>, 'onChange' | 'value'> {
	label: string
	error?: string
	value?: string
	onChange: (value: string) => void
}

export default function AddressSuggestions({
	label,
	error,
	placeholder,
	value: inputValue,
	onChange,
	onBlur,
	name,
	ref,
}: IProps) {
	const id = useId()

	const [query, setQuery] = useState('')
	const [value, setValue] = useState<IDadataSuggestion | null>(null)

	const anchor = useComboboxAnchor()

	const currentQuery = inputValue ?? query
	const trimmedQuery = currentQuery.trim()
	const debouncedQuery = useDebounce(trimmedQuery, 300)

	const { data, isFetching } = useQuery({
		queryKey: ['address-suggestions', debouncedQuery],
		queryFn: () => dadataService.getAddressSuggestions(debouncedQuery),
		enabled: trimmedQuery.length > 0 && debouncedQuery.length > 0,
		placeholderData: prev => prev,
	})

	const items = trimmedQuery ? (data?.suggestions ?? []) : []

	const isSearching =
		trimmedQuery.length > 0 && (trimmedQuery !== debouncedQuery || isFetching)

	const { ADDRESS_SUGGESTIONS } = CONFIG.UI

	return (
		<Combobox
			items={items}
			value={value}
			inputValue={currentQuery}
			onValueChange={(item: IDadataSuggestion | null) => setValue(item)}
			onInputValueChange={nextQuery => {
				setQuery(nextQuery)
				onChange(nextQuery)
			}}
			onOpenChange={(open, details) => {
				if (!open && details.reason === 'item-press') {
					details.cancel()
				}
			}}
			itemToStringLabel={(item: IDadataSuggestion) => item.value}
			itemToStringValue={(item: IDadataSuggestion) => item.value}
			isItemEqualToValue={(item: IDadataSuggestion, value: IDadataSuggestion) =>
				item.value === value.value
			}
			filter={null}
		>
			<Field>
				<FieldLabel htmlFor={id}>{label}</FieldLabel>

				<div ref={anchor}>
					<ComboboxInput
						id={id}
						ref={ref}
						name={name}
						onBlur={onBlur}
						showTrigger={false}
						placeholder={placeholder}
						aria-invalid={!!error}
					>
						<InputGroupAddon align='inline-end'>
							<Icon
								name='LoaderCircle'
								className={isSearching ? 'animate-spin' : 'invisible'}
							/>
						</InputGroupAddon>
					</ComboboxInput>
				</div>
				{error && <FieldError>{error}</FieldError>}
			</Field>

			<ComboboxContent anchor={anchor}>
				<ComboboxEmpty>
					{isSearching ? (
						<Icon name='LoaderCircle' className='animate-spin' />
					) : trimmedQuery ? (
						ADDRESS_SUGGESTIONS.NOT_FOUND
					) : (
						ADDRESS_SUGGESTIONS.START
					)}
				</ComboboxEmpty>
				<ComboboxList>
					{(item: IDadataSuggestion) => (
						<ComboboxItem key={item.value} value={item}>
							{item.value}
						</ComboboxItem>
					)}
				</ComboboxList>
			</ComboboxContent>
		</Combobox>
	)
}
