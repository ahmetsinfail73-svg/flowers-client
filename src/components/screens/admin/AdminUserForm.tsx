'use client'

import { Button, buttonVariants } from '@/components/ui/common/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/common/card'
import { Input } from '@/components/ui/common/input'
import { Label } from '@/components/ui/common/label'
import { PATH } from '@/constants/path.constant'
import { useAdminHydrated, useAdminStore, type AdminUser } from '@/store/admin.store'
import { UserRoleEnum } from '@/types/user.type'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useState, type FormEvent } from 'react'

const roleNames: Record<UserRoleEnum, string> = {
	[UserRoleEnum.CUSTOMER]: 'Покупатель',
	[UserRoleEnum.MANAGER]: 'Менеджер',
	[UserRoleEnum.ADMIN]: 'Администратор',
}

export default function AdminUserForm({ mode }: { mode: 'create' | 'edit' }) {
	const hydrated = useAdminHydrated()
	const { id } = useParams<{ id?: string }>()
	const users = useAdminStore(state => state.users)
	const user = mode === 'edit' ? users.find(item => item.id === id) : undefined

	if (!hydrated) return <p className='text-muted-foreground'>Загружаем данные…</p>
	if (mode === 'edit' && !user) return (
		<Card><CardContent className='flex-col-md'>
			<p>Пользователь не найден.</p>
			<Link href={PATH.ADMIN_USERS} className={buttonVariants({ variant: 'outline' })}>К пользователям</Link>
		</CardContent></Card>
	)

	return <UserEditor key={user?.id ?? 'new'} user={user} />
}

function UserEditor({ user }: { user?: AdminUser }) {
	const router = useRouter()
	const addUser = useAdminStore(state => state.addUser)
	const updateUser = useAdminStore(state => state.updateUser)
	const [name, setName] = useState(user?.name ?? '')
	const [phone, setPhone] = useState(user?.phone_number ?? '')
	const [role, setRole] = useState<UserRoleEnum>(user?.role ?? UserRoleEnum.CUSTOMER)

	function save(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		const fields = { name: name.trim(), phone_number: phone.trim(), role }
		if (user) updateUser(user.id, fields)
		else addUser(fields)
		router.push(PATH.ADMIN_USERS)
	}

	return (
		<div className='flex-col-md'>
			<div className='flex-center-between flex-wrap gap-3'>
				<h2 className='text-2xl font-semibold'>{user ? 'Изменить пользователя' : 'Новый пользователь'}</h2>
				<Link href={PATH.ADMIN_USERS} className={buttonVariants({ variant: 'outline' })}>К пользователям</Link>
			</div>
			<Card className='w-full'>
				<CardHeader><CardTitle>Информация о пользователе</CardTitle></CardHeader>
				<CardContent>
					<form onSubmit={save} className='flex-col-md'>
						<div className='flex-col-sm'>
							<Label htmlFor='admin-user-name'>Имя</Label>
							<Input id='admin-user-name' value={name} onChange={event => setName(event.target.value)} required maxLength={30} className='h-12' />
						</div>
						<div className='flex-col-sm'>
							<Label htmlFor='admin-user-phone'>Номер телефона</Label>
							<Input id='admin-user-phone' type='tel' value={phone} onChange={event => setPhone(event.target.value)} pattern='\+?[0-9]{10,15}' required className='h-12' />
						</div>
						<div className='flex-col-sm'>
							<Label htmlFor='admin-user-role'>Роль</Label>
							<select id='admin-user-role' value={role} onChange={event => setRole(event.target.value as UserRoleEnum)} className='h-12 w-full rounded-4xl border border-input bg-input/30 px-3 text-sm'>
								{Object.values(UserRoleEnum).map(value => <option key={value} value={value}>{roleNames[value]}</option>)}
							</select>
						</div>
						<div className='flex-row-sm justify-end'>
							<Link href={PATH.ADMIN_USERS} className={buttonVariants({ variant: 'outline' })}>Отмена</Link>
							<Button type='submit'>Сохранить</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}
