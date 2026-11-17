'use client'

import Section from '@/components/ui/custom/section'
import { CONFIG } from '@/constants/config.constant'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useMemo, type ReactNode } from 'react'
import { buttonVariants } from '../../common/button'
import Icon from '../icon'
import type { IFiltersConfig, ITextFilterConfig } from './filters.type'
import LeftFilters from './left-filters'
import SearchFilter from './search-filter'

interface IProps<T> extends IFiltersConfig {
	items: T[]
	render: (item: T) => ReactNode
	TITLE: string
	SEARCH?: ITextFilterConfig
	createLink?: string
}

export default function Filters<T>({
	items,
	SORT,
	PRICE,
	SEARCH,
	SELECT,
	SWITCHES,
	TITLE,
	render,
	createLink,
}: IProps<T>) {
	const { APPLY_BUTTON, RESET_BUTTON, SEARCH_BUTTON, CREATE_BUTTON } =
		CONFIG.UI.FILTERS
	const searchParams = useSearchParams()
	const pathname = usePathname()

	const isSort = !!SORT
	const isSelect = !!SELECT
	const isPrice = !!PRICE
	const isSearch = !!SEARCH

	const filtersKey = useMemo(() => {
		const parts: string[] = []

		if (isSort) parts.push(searchParams.get(SORT.NAME) ?? '')
		if (isSelect) parts.push(searchParams.getAll(SELECT.NAME).join(','))
		if (isPrice) {
			parts.push(
				searchParams.get(PRICE.MIN.NAME) ?? '',
				searchParams.get(PRICE.MAX.NAME) ?? '',
			)
		}
		parts.push(
			...(SWITCHES?.map(
				({ NAME }) => `${NAME}:${searchParams.get(NAME) ?? ''}`,
			) ?? []),
		)

		return parts.join('|')
	}, [searchParams, isSort, SORT, isSelect, SELECT, isPrice, PRICE, SWITCHES])

	const searchKey = isSearch ? (searchParams.get(SEARCH.NAME) ?? '') : ''

	return (
		<Section
			size='sm'
			className='grid gap-8 lg:grid-cols-[300px_1fr]'
			isPaddingTop={false}
		>
			<LeftFilters
				key={filtersKey}
				SORT={SORT}
				SELECT={SELECT}
				PRICE={PRICE}
				SWITCHES={SWITCHES}
				searchParams={searchParams}
				pathname={pathname}
				APPLY_BUTTON={APPLY_BUTTON}
				RESET_BUTTON={RESET_BUTTON}
			/>

			<div className='flex-col-sm'>
				<div className='flex-col-sm md:flex-row md:flex-center-between items-start md:gap-2'>
					<h2 className='text-2xl'>{TITLE}</h2>

					{createLink && (
						<Link
							href={createLink}
							className={buttonVariants({ variant: 'link' })}
						>
							<Icon name='Plus' />

							{CREATE_BUTTON}
						</Link>
					)}
				</div>

				{isSearch && (
					<SearchFilter
						key={searchKey}
						SEARCH={SEARCH}
						searchParams={searchParams}
						pathname={pathname}
						SEARCH_BUTTON={SEARCH_BUTTON}
					/>
				)}

				<div className='grid-cols-md'>{items.map(item => render(item))}</div>

				{/* <InfiniteProductList
					key={searchParams.toString()}
					products={products}
				/> */}
			</div>
		</Section>
	)
}

// function InfiniteProductList({ products }: IProps) {
// 	const [queryClient] = useState(() => new QueryClient())

// 	return (
// 		<QueryClientProvider client={queryClient}>
// 			<PaginatedProductList products={products} />
// 		</QueryClientProvider>
// 	)
// }

// function PaginatedProductList({ products }: IProps) {
// 	const getProductsPage = async ({
// 		page,
// 		perPage,
// 	}: {
// 		page: number
// 		perPage: number
// 	}) => {
// 		// TODO: Заменить заглушку запросом с параметрами { page, perPage }.
// 		return {
// 			items: products.slice((page - 1) * perPage, page * perPage),
// 			total: products.length,
// 		}
// 	}

// 	const {
// 		data,
// 		fetchNextPage,
// 		hasNextPage,
// 		isFetching,
// 		isPending,
// 		isError,
// 		refetch,
// 	} = useInfiniteQuery({
// 		queryKey: ['catalog-products', PRODUCTS_PAGE_SIZE],
// 		initialPageParam: 1,
// 		queryFn: ({ pageParam }) =>
// 			getProductsPage({ page: pageParam, perPage: PRODUCTS_PAGE_SIZE }),
// 		getNextPageParam: (lastPage, _pages, lastPageParam) =>
// 			lastPage.items.length > 0 &&
// 			lastPageParam * PRODUCTS_PAGE_SIZE < lastPage.total
// 				? lastPageParam + 1
// 				: undefined,
// 	})

// 	const loadedProducts = data?.pages.flatMap(page => page.items) ?? []

// 	const loadMore = () => {
// 		if (!hasNextPage || isFetching || isError) return

// 		return fetchNextPage({ cancelRefetch: false })
// 	}

// 	if (isPending) return <p role='status'>Загрузка товаров…</p>

// 	return (
// 		<>
// 			<InfiniteScroll
// 				dataLength={loadedProducts.length}
// 				next={loadMore}
// 				hasMore={hasNextPage && !isError}
// 				loader={<p role='status'>Загрузка товаров…</p>}
// 				scrollThreshold='200px'
// 			>
// 				<div className='grid gap-5 sm:grid-cols-2 xl:grid-cols-3'>
// 					{loadedProducts.map(product => (
// 						<ProductCard key={product.id} product={product} />
// 					))}
// 				</div>
// 			</InfiniteScroll>

// 			{isError && (
// 				<div role='alert' className='flex-col-sm'>
// 					<p>Не удалось загрузить товары.</p>
// 					<Button
// 						variant='outline'
// 						disabled={isFetching}
// 						onClick={() =>
// 							data ? fetchNextPage({ cancelRefetch: false }) : refetch()
// 						}
// 					>
// 						Повторить
// 					</Button>
// 				</div>
// 			)}
// 		</>
// 	)
// }
