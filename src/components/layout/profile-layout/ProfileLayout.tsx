import Section from '@/components/ui/custom/section'
import SectionHeading from '@/components/ui/custom/section-heading'
import { CONFIG } from '@/constants/config.constant'
import type { ReactNode } from 'react'
import NavLinks from '../nav-links/NavLinks'

interface IProps {
	children: ReactNode
}

export default function ProfileLayout({ children }: IProps) {
	const { PROFILE_LAYOUT } = CONFIG

	return (
		<main>
			<Section size='sm'>
				<SectionHeading level={1} {...PROFILE_LAYOUT} />

				<NavLinks links={PROFILE_LAYOUT.NAV} />
			</Section>

			<Section size='sm' isPaddingTop={false}>
				{children}
			</Section>
		</main>
	)
}
