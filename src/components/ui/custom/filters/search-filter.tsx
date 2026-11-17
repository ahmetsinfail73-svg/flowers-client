'use client'

import { Button } from '@/components/ui/common/button'
import { ButtonGroup } from '@/components/ui/common/button-group'
import { Input } from '@/components/ui/common/input'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import type { ITextFilterConfig } from './filters.type'
import { navigateTo } from './filters.util'

interface IProps {
	SEARCH: ITextFilterConfig
	searchParams: URLSearchParams
	pathname: string
	SEARCH_BUTTON: string
}

export default function SearchFilter({
	SEARCH,
	searchParams,
	pathname,
	SEARCH_BUTTON,
}: IProps) {
	const { push } = useRouter()

	const [search, setSearch] = useState(
		() => searchParams.get(SEARCH.NAME) ?? '',
	)

	const applySearch = useCallback(() => {
		const params = new URLSearchParams(searchParams)

		if (search) params.set(SEARCH.NAME, search)
		else params.delete(SEARCH.NAME)

		navigateTo(push, pathname, params)
	}, [searchParams, push, pathname, SEARCH, search])

	return (
		<form
			onSubmit={e => {
				e.preventDefault()
				applySearch()
			}}
		>
			<ButtonGroup>
				<Input
					type='search'
					placeholder={SEARCH.PLACEHOLDER}
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>

				<Button type='submit'>{SEARCH_BUTTON}</Button>
			</ButtonGroup>
		</form>
	)
}
