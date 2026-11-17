'use client'

import { buttonVariants } from '@/components/ui/common/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/common/card'
import { Input } from '@/components/ui/common/input'
import { PATH } from '@/constants/path.constant'
import { useAdminHydrated, useAdminStore } from '@/store/admin.store'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ConfirmDelete from './ConfirmDelete'

export default function AdminCategories() {
	const hydrated = useAdminHydrated()
	const categories = useAdminStore(state => state.categories)
	const products = useAdminStore(state => state.products)
	const deleteCategory = useAdminStore(state => state.deleteCategory)
	const [search, setSearch] = useState('')
	const filtered = categories.filter(category =>
		category.title.toLowerCase().includes(search.toLowerCase().trim()),
	)

	if (!hydrated)
		return <p className='text-muted-foreground'>Загружаем данные…</p>

	return (
		<div className='flex-col-md'>
			<div className='flex-center-between flex-wrap gap-3'>
				<div>
					<h2 className='text-2xl font-semibold'>Категории</h2>
					<p className='text-sm text-muted-foreground'>
						Создавайте и меняйте разделы каталога.
					</p>
				</div>
				<Link href={PATH.ADMIN_CATEGORIES_NEW} className={buttonVariants()}>
					Добавить категорию
				</Link>
			</div>
			<Input
				type='search'
				aria-label='Поиск категорий'
				placeholder='Поиск по названию'
				value={search}
				onChange={event => setSearch(event.target.value)}
				className='h-12'
			/>
			{filtered.length === 0 ? (
				<Card>
					<CardContent>Категории не найдены.</CardContent>
				</Card>
			) : (
				<ul className='grid-cols-md'>
					{filtered.map(category => (
						<li key={category.id}>
							<Card className='h-full'>
								{category.image_url && (
									<Image
										src={category.image_url}
										alt={category.title}
										width={480}
										height={240}
										unoptimized
										className='aspect-video w-full object-cover'
									/>
								)}
								<CardHeader>
									<CardTitle>{category.title}</CardTitle>
									<CardDescription>
										Товаров:{' '}
										{
											products.filter(
												product => product.category_id === category.id,
											).length
										}
									</CardDescription>
								</CardHeader>
								<CardContent className='mt-auto flex-row-sm'>
									<Link
										href={PATH.ADMIN_CATEGORIES_EDIT(category.id)}
										className={buttonVariants({
											variant: 'outline',
											size: 'sm',
										})}
									>
										Изменить
									</Link>
									<ConfirmDelete
										name={category.title}
										onConfirm={() => deleteCategory(category.id)}
									/>
								</CardContent>
							</Card>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
