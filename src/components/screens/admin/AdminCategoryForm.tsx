'use client'

import { Button, buttonVariants } from '@/components/ui/common/button'
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/components/ui/common/card'
import { Input } from '@/components/ui/common/input'
import { Label } from '@/components/ui/common/label'
import { PATH } from '@/constants/path.constant'
import { useAdminHydrated, useAdminStore } from '@/store/admin.store'
import type { ICategory } from '@/types/category.type'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useState, type FormEvent } from 'react'
import { product } from '../product/Product'

export default function AdminCategoryForm({
	mode,
}: {
	mode: 'create' | 'edit'
}) {
	const hydrated = useAdminHydrated()
	const { id } = useParams<{ id?: string }>()
	const categories = useAdminStore(state => state.categories)
	const category = product.category

	if (!hydrated)
		return <p className='text-muted-foreground'>Загружаем данные…</p>
	if (mode === 'edit' && !category)
		return (
			<Card>
				<CardContent className='flex-col-md'>
					<p>Категория не найдена.</p>
					<Link
						href={PATH.ADMIN_CATEGORIES}
						className={buttonVariants({ variant: 'outline' })}
					>
						К категориям
					</Link>
				</CardContent>
			</Card>
		)

	return <CategoryEditor key={category?.id ?? 'new'} category={category} />
}

function CategoryEditor({ category }: { category?: ICategory }) {
	const router = useRouter()
	const addCategory = useAdminStore(state => state.addCategory)
	const updateCategory = useAdminStore(state => state.updateCategory)
	const [title, setTitle] = useState(category?.title ?? '')
	const [imageUrl, setImageUrl] = useState(category?.image_url ?? '')

	function save(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		const fields = { title: title.trim(), image_url: imageUrl.trim() }
		if (category) updateCategory(category.id, fields)
		else addCategory(fields)
		router.push(PATH.ADMIN_CATEGORIES)
	}

	return (
		<div className='flex-col-md'>
			<div className='flex-center-between flex-wrap gap-3'>
				<h2 className='text-2xl font-semibold'>
					{category ? 'Изменить категорию' : 'Новая категория'}
				</h2>
				<Link
					href={PATH.ADMIN_CATEGORIES}
					className={buttonVariants({ variant: 'outline' })}
				>
					К категориям
				</Link>
			</div>
			<Card className='w-full'>
				<CardHeader>
					<CardTitle>Информация о категории</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={save} className='flex-col-md'>
						<div className='flex-col-sm'>
							<Label htmlFor='admin-category-title'>Название</Label>
							<Input
								id='admin-category-title'
								value={title}
								onChange={event => setTitle(event.target.value)}
								required
								maxLength={50}
								className='h-12'
							/>
						</div>
						<div className='flex-col-sm'>
							<Label htmlFor='admin-category-image'>Адрес изображения</Label>
							<Input
								id='admin-category-image'
								value={imageUrl}
								onChange={event => setImageUrl(event.target.value)}
								required
								className='h-12'
							/>
						</div>
						<div className='flex-row-sm justify-end'>
							<Link
								href={PATH.ADMIN_CATEGORIES}
								className={buttonVariants({ variant: 'outline' })}
							>
								Отмена
							</Link>
							<Button type='submit'>Сохранить</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}
