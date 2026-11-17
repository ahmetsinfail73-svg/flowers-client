'use client'

import { Button, buttonVariants } from '@/components/ui/common/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/common/card'
import { Input } from '@/components/ui/common/input'
import { Label } from '@/components/ui/common/label'
import { Switch } from '@/components/ui/common/switch'
import { Textarea } from '@/components/ui/common/textarea'
import { PATH } from '@/constants/path.constant'
import { useAdminHydrated, useAdminStore } from '@/store/admin.store'
import type { IProduct } from '@/types/product.type'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useState, type FormEvent } from 'react'

export default function AdminProductForm({ mode }: { mode: 'create' | 'edit' }) {
	const hydrated = useAdminHydrated()
	const { id } = useParams<{ id?: string }>()
	const products = useAdminStore(state => state.products)
	const categories = useAdminStore(state => state.categories)
	const product = mode === 'edit' ? products.find(item => item.id === id) : undefined

	if (!hydrated) return <p className='text-muted-foreground'>Загружаем данные…</p>
	if (mode === 'edit' && !product) return (
		<Card><CardContent className='flex-col-md'>
			<p>Товар не найден.</p>
			<Link href={PATH.ADMIN_PRODUCTS} className={buttonVariants({ variant: 'outline' })}>К товарам</Link>
		</CardContent></Card>
	)

	return <ProductEditor key={product?.id ?? 'new'} product={product} categories={categories} />
}

function ProductEditor({ product, categories }: { product?: IProduct; categories: ReturnType<typeof useAdminStore.getState>['categories'] }) {
	const router = useRouter()
	const addProduct = useAdminStore(state => state.addProduct)
	const updateProduct = useAdminStore(state => state.updateProduct)
	const [title, setTitle] = useState(product?.title ?? '')
	const [categoryId, setCategoryId] = useState(product?.category_id ?? '')
	const [price, setPrice] = useState(product ? String(product.price) : '')
	const [count, setCount] = useState(product ? String(product.count) : '0')
	const [description, setDescription] = useState(product?.description ?? '')
	const [imagePaths, setImagePaths] = useState(product?.image_paths.join('\n') ?? '')
	const [isShow, setIsShow] = useState(product?.is_show ?? true)
	const [isShowCase, setIsShowCase] = useState(product?.is_show_case ?? false)

	function save(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		const fields = {
			title: title.trim(),
			category_id: categoryId || undefined,
			price: Number(price),
			count: Number(count),
			description: description.trim() || undefined,
			image_paths: imagePaths.split('\n').map(path => path.trim()).filter(Boolean),
			is_show: isShow,
			is_show_case: isShowCase,
		}
		if (product) updateProduct(product.id, fields)
		else addProduct(fields)
		router.push(PATH.ADMIN_PRODUCTS)
	}

	return (
		<div className='flex-col-md'>
			<div className='flex-center-between flex-wrap gap-3'>
				<h2 className='text-2xl font-semibold'>{product ? 'Изменить товар' : 'Новый товар'}</h2>
				<Link href={PATH.ADMIN_PRODUCTS} className={buttonVariants({ variant: 'outline' })}>К товарам</Link>
			</div>
			<Card className='w-full'>
				<CardHeader><CardTitle>Информация о товаре</CardTitle></CardHeader>
				<CardContent>
					<form onSubmit={save} className='flex-col-md'>
						<div className='flex-col-sm'>
							<Label htmlFor='admin-product-title'>Название</Label>
							<Input id='admin-product-title' value={title} onChange={event => setTitle(event.target.value)} required maxLength={50} className='h-12' />
						</div>
						<div className='grid-cols-md'>
							<div className='flex-col-sm'>
								<Label htmlFor='admin-product-category'>Категория</Label>
								<select id='admin-product-category' value={categoryId} onChange={event => setCategoryId(event.target.value)} className='h-12 w-full rounded-4xl border border-input bg-input/30 px-3 text-sm'>
									<option value=''>Без категории</option>
									{categories.map(category => <option key={category.id} value={category.id}>{category.title}</option>)}
								</select>
							</div>
							<div className='flex-col-sm'>
								<Label htmlFor='admin-product-price'>Цена, ₽</Label>
								<Input id='admin-product-price' type='number' min='0.01' step='0.01' value={price} onChange={event => setPrice(event.target.value)} required className='h-12' />
							</div>
						</div>
						<div className='flex-col-sm'>
							<Label htmlFor='admin-product-count'>Остаток, шт.</Label>
							<Input id='admin-product-count' type='number' min='0' step='1' value={count} onChange={event => setCount(event.target.value)} required className='h-12' />
						</div>
						<div className='flex-col-sm'>
							<Label htmlFor='admin-product-description'>Описание</Label>
							<Textarea id='admin-product-description' value={description} onChange={event => setDescription(event.target.value)} rows={4} />
						</div>
						<div className='flex-col-sm'>
							<Label htmlFor='admin-product-images'>Пути к изображениям, по одному в строке</Label>
							<Textarea id='admin-product-images' value={imagePaths} onChange={event => setImagePaths(event.target.value)} rows={3} />
						</div>
						<div className='flex items-center gap-3'>
							<Switch id='admin-product-show' checked={isShow} onCheckedChange={setIsShow} />
							<Label htmlFor='admin-product-show'>Показывать товар</Label>
						</div>
						<div className='flex items-center gap-3'>
							<Switch id='admin-product-showcase' checked={isShowCase} onCheckedChange={setIsShowCase} />
							<Label htmlFor='admin-product-showcase'>Показывать на витрине</Label>
						</div>
						<div className='flex-row-sm justify-end'>
							<Link href={PATH.ADMIN_PRODUCTS} className={buttonVariants({ variant: 'outline' })}>Отмена</Link>
							<Button type='submit'>Сохранить</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}
