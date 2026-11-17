import AdminLayout from '@/components/layout/admin-layout/AdminLayout'
import type { ReactNode } from 'react'

interface IProps {
	children: ReactNode
}

export default function Layout({ children }: IProps) {
	return <AdminLayout>{children}</AdminLayout>
}
