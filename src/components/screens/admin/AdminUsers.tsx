import Filters from '@/components/ui/custom/filters/filters'
import { CONFIG } from '@/constants/config.constant'

export default function AdminUsers() {
	const { ADMIN_USERS } = CONFIG

	return (
		<Filters
			TITLE={ADMIN_USERS.FOUND(1, 2, 1, 2)}
			items={[]}
			SEARCH={ADMIN_USERS.FILTERS.SEARCH}
			SELECT={ADMIN_USERS.FILTERS.ROLES}
			SORT={ADMIN_USERS.FILTERS.SORT}
		/>
	)
}
