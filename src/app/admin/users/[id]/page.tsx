import AdminUserForm from '@/components/screens/admin/AdminUserForm'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Изменить пользователя | Админ-панель' }
export const instant = false

export default function Page() {
	return <AdminUserForm mode='edit' />
}
