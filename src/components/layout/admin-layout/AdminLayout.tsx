import Section from '@/components/ui/custom/section'
import SectionHeading from '@/components/ui/custom/section-heading'
import { CONFIG } from '@/constants/config.constant'
import type { ReactNode } from 'react'
import NavLinks from '../nav-links/NavLinks'

interface IProps {
	children: ReactNode
}

export default function AdminLayout({ children }: IProps) {
	const { ADMIN_LAYOUT } = CONFIG

	return (
		<main>
			<Section size='sm'>
				<SectionHeading level={1} {...ADMIN_LAYOUT} />

				<NavLinks links={ADMIN_LAYOUT.NAV} />
			</Section>

			{children}
		</main>
	)
}
