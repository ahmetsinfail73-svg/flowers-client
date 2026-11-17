import AdminProductForm from '@/components/screens/admin/AdminProductForm'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Изменить товар | Админ-панель' }
export const instant = false

export default function Page() {
	return <AdminProductForm mode='edit' />
}
