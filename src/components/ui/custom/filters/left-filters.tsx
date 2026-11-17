'use client'

import { Button } from '@/components/ui/common/button'
import { ButtonGroup } from '@/components/ui/common/button-group'
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
	InputGroupText,
} from '@/components/ui/common/input-group'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/common/select'
import { useRouter } from 'next/navigation'
import { useCallback, useMemo, useState } from 'react'
import SwitchField from '../switch-field'
import type { IFiltersConfig } from './filters.type'
import { navigateTo } from './filters.util'

interface IProps extends IFiltersConfig {
	searchParams: URLSearchParams
	pathname: string
	APPLY_BUTTON: string
	RESET_BUTTON: string
}

export default function LeftFilters({
	SORT,
	SELECT,
	PRICE,
	SWITCHES,
	searchParams,
	pathname,
	APPLY_BUTTON,
	RESET_BUTTON,
}: IProps) {
	const { push } = useRouter()

	const isSort = !!SORT
	const isSelect = !!SELECT
	const isPrice = !!PRICE

	const defaultSort = isSort ? SORT.ITEMS[0].VALUE : ''

	const [options, setOptions] = useState<string[]>(() =>
		isSelect
			? (
					searchParams.get(SELECT.NAME)?.split(',').filter(Boolean) ?? []
				).filter(value => SELECT.ITEMS.some(({ VALUE }) => VALUE === value))
			: [],
	)

	const [sort, setSort] = useState(() =>
		isSort ? searchParams.get(SORT.NAME) || defaultSort : '',
	)

	const [minPrice, setMinPrice] = useState(() =>
		isPrice ? (searchParams.get(PRICE.MIN.NAME) ?? '') : '',
	)

	const [maxPrice, setMaxPrice] = useState(() =>
		isPrice ? (searchParams.get(PRICE.MAX.NAME) ?? '') : '',
	)

	const [switchValues, setSwitchValues] = useState<Record<string, boolean>>(
		() =>
			Object.fromEntries(
				SWITCHES?.map(({ NAME }) => [
					NAME,
					searchParams.get(NAME) === 'true',
				]) ?? [],
			),
	)

	const filterKeys = useMemo(
		() =>
			[
				isSort && SORT.NAME,
				isSelect && SELECT.NAME,
				isPrice && PRICE.MIN.NAME,
				isPrice && PRICE.MAX.NAME,
				...(SWITCHES?.map(({ NAME }) => NAME) ?? []),
			].filter(Boolean) as string[],
		[isSort, SORT, isSelect, SELECT, isPrice, PRICE, SWITCHES],
	)

	const applyFilters = useCallback(() => {
		const params = new URLSearchParams(searchParams)

		if (isSort) {
			if (sort) params.set(SORT.NAME, sort)
			else params.delete(SORT.NAME)
		}

		if (isSelect) {
			if (options.length > 0) params.set(SELECT.NAME, options.join(','))
			else params.delete(SELECT.NAME)
		}

		if (isPrice) {
			if (minPrice) params.set(PRICE.MIN.NAME, minPrice)
			else params.delete(PRICE.MIN.NAME)

			if (maxPrice) params.set(PRICE.MAX.NAME, maxPrice)
			else params.delete(PRICE.MAX.NAME)
		}

		SWITCHES?.forEach(({ NAME }) => {
			params.set(NAME, Boolean(switchValues[NAME]).toString())
		})

		navigateTo(push, pathname, params)
	}, [
		searchParams,
		push,
		pathname,
		isSort,
		SORT,
		sort,
		isSelect,
		SELECT,
		options,
		isPrice,
		PRICE,
		minPrice,
		maxPrice,
		SWITCHES,
		switchValues,
	])

	const resetFilters = useCallback(() => {
		setOptions([])
		setSort(defaultSort)
		setMinPrice('')
		setMaxPrice('')
		setSwitchValues({})

		const params = new URLSearchParams(searchParams)
		filterKeys.forEach(key => params.delete(key))

		navigateTo(push, pathname, params)
	}, [defaultSort, searchParams, filterKeys, push, pathname])

	const selectItems = useMemo(
		() =>
			isSelect
				? SELECT.ITEMS.map(({ VALUE, TITLE }) => ({
						value: VALUE,
						label: TITLE,
					}))
				: [],
		[isSelect, SELECT],
	)

	const sortItems = useMemo(
		() =>
			isSort
				? SORT.ITEMS.map(({ VALUE, TITLE }) => ({
						value: VALUE,
						label: TITLE,
					}))
				: [],
		[isSort, SORT],
	)

	return (
		<div className='flex-col-sm'>
			{isSelect && (
				<Select
					value={options}
					onValueChange={setOptions}
					items={selectItems}
					multiple
				>
					<SelectTrigger>
						<SelectValue placeholder={SELECT.PLACEHOLDER} />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>{SELECT.PLACEHOLDER}</SelectLabel>
							{SELECT.ITEMS.map(({ TITLE, VALUE }) => (
								<SelectItem key={VALUE} value={VALUE}>
									{TITLE}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			)}

			{isSort && (
				<Select
					value={sort}
					onValueChange={value => !!value && setSort(value)}
					items={sortItems}
				>
					<SelectTrigger>
						<SelectValue placeholder={SORT.PLACEHOLDER} />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>{SORT.PLACEHOLDER}</SelectLabel>
							{SORT.ITEMS.map(({ VALUE, TITLE }) => (
								<SelectItem key={VALUE} value={VALUE}>
									{TITLE}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			)}

			{isPrice && (
				<ButtonGroup>
					<InputGroup>
						<InputGroupAddon>
							<InputGroupText>{PRICE.MIN.PLACEHOLDER}</InputGroupText>
						</InputGroupAddon>
						<InputGroupInput
							type='number'
							inputMode='numeric'
							placeholder='0'
							value={minPrice}
							onChange={e => setMinPrice(e.target.value)}
						/>
					</InputGroup>

					<InputGroup>
						<InputGroupAddon align='inline-start'>
							<InputGroupText>{PRICE.MAX.PLACEHOLDER}</InputGroupText>
						</InputGroupAddon>
						<InputGroupInput
							type='number'
							inputMode='numeric'
							placeholder='∞'
							value={maxPrice}
							onChange={e => setMaxPrice(e.target.value)}
						/>
					</InputGroup>
				</ButtonGroup>
			)}

			{SWITCHES?.map(({ NAME, PLACEHOLDER }) => (
				<SwitchField
					key={NAME}
					label={PLACEHOLDER}
					checked={switchValues[NAME] ?? false}
					onCheckedChange={checked =>
						setSwitchValues(values => ({ ...values, [NAME]: checked }))
					}
				/>
			))}

			<Button onClick={applyFilters}>{APPLY_BUTTON}</Button>

			<Button variant='outline' onClick={resetFilters}>
				{RESET_BUTTON}
			</Button>
		</div>
	)
}
