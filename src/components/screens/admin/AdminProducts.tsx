'use client'

import { buttonVariants } from '@/components/ui/common/button'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/common/card'
import { Input } from '@/components/ui/common/input'
import { PATH } from '@/constants/path.constant'
import { useAdminHydrated, useAdminStore } from '@/store/admin.store'
import { formatPrice } from '@/utils/format-price.util'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ConfirmDelete from './ConfirmDelete'

export default function AdminProducts() {
	const hydrated = useAdminHydrated()
	const products = useAdminStore(state => state.products)
	const categories = useAdminStore(state => state.categories)
	const deleteProduct = useAdminStore(state => state.deleteProduct)
	const [search, setSearch] = useState('')
	const [categoryFilter, setCategoryFilter] = useState('')
	const filtered = products.filter(product =>
		product.title.toLowerCase().includes(search.toLowerCase().trim()) &&
		(!categoryFilter || product.category_id === categoryFilter),
	)

	if (!hydrated) return <p className='text-muted-foreground'>Загружаем данные…</p>

	return (
		<div className='flex-col-md'>
			<div className='flex-center-between flex-wrap gap-3'>
				<div>
					<h2 className='text-2xl font-semibold'>Товары</h2>
					<p className='text-sm text-muted-foreground'>Управляйте ассортиментом, ценами и остатками.</p>
				</div>
				<Link href={PATH.ADMIN_PRODUCTS_NEW} className={buttonVariants()}>Добавить товар</Link>
			</div>
			<div className='grid-cols-md'>
				<Input type='search' aria-label='Поиск товаров' placeholder='Поиск по названию' value={search} onChange={event => setSearch(event.target.value)} className='h-12' />
				<select aria-label='Фильтр по категории' value={categoryFilter} onChange={event => setCategoryFilter(event.target.value)} className='h-12 w-full rounded-4xl border border-input bg-input/30 px-3 text-sm'>
					<option value=''>Все категории</option>
					{categories.map(category => <option key={category.id} value={category.id}>{category.title}</option>)}
				</select>
			</div>
			{filtered.length === 0 ? (
				<Card><CardContent>Товары не найдены.</CardContent></Card>
			) : (
				<ul className='flex-col-md'>
					{filtered.map(product => (
						<li key={product.id}>
							<Card>
								<CardContent className='flex flex-col gap-5 md:flex-row'>
									<Image src={product.image_paths[0] || '/images/image-not-found.png'} alt={product.title} width={160} height={160} unoptimized className='size-32 rounded-xl object-cover' />
									<div className='flex flex-1 flex-col gap-3'>
										<div className='flex-center-between flex-wrap gap-3'>
											<CardTitle>{product.title}</CardTitle>
											<p className='font-semibold'>{formatPrice(product.price)}</p>
										</div>
										<CardDescription>
											{categories.find(category => category.id === product.category_id)?.title ?? 'Без категории'} · Остаток: {product.count} · {product.is_show ? 'Опубликован' : 'Скрыт'}
										</CardDescription>
										<div className='flex-row-sm mt-auto'>
											<Link href={PATH.ADMIN_PRODUCTS_EDIT(product.id)} className={buttonVariants({ variant: 'outline', size: 'sm' })}>Изменить</Link>
											<ConfirmDelete name={product.title} onConfirm={() => deleteProduct(product.id)} />
										</div>
									</div>
								</CardContent>
							</Card>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
