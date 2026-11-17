'use client'

import AdminItem from '@/components/ui/custom/admin-item'
import Filters from '@/components/ui/custom/filters/filters'
import { CONFIG } from '@/constants/config.constant'
import { UserRoleEnum, type IUser } from '@/types/user.type'
import Link from 'next/link'

export default function AdminUsers() {
	const { ADMIN_USERS } = CONFIG

	return (
		<Filters
			TITLE={ADMIN_USERS.FOUND(1, 2, 1, 2)}
			items={
				[
					{
						created_at: '2024-06-01T12:00:00Z',
						id: '1',
						name: 'John Doe',
						phone_number: '+7991234567',
						password: 'password123',
						role: UserRoleEnum.ADMIN,
					},
				] satisfies IUser[]
			}
			render={user => {
				const DESCRIPTION = CONFIG.ADMIN_USERS.ITEM.DESCRIPTION_LINK(
					user.phone_number,
				)

				return (
					<AdminItem
						key={user.id}
						created_at={user.created_at}
						title={user.name}
						badge={CONFIG.ADMIN_USERS.ITEM.BADGE[user.role]}
					>
						<Link href={DESCRIPTION.HREF}>{DESCRIPTION.TITLE}</Link>
					</AdminItem>
				)
			}}
			SEARCH={ADMIN_USERS.FILTERS.SEARCH}
			SELECT={ADMIN_USERS.FILTERS.ROLES}
			SORT={ADMIN_USERS.FILTERS.SORT}
		/>
	)
}
