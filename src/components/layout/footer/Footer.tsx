import { Separator } from '@/components/ui/common/separator'
import Icon from '@/components/ui/custom/icon'
import { CONFIG } from '@/constants/config.constant'
import Link from 'next/link'
import Logo from '../logo/Logo'

export default function Footer() {
	return (
		<footer className='bg-foreground text-background py-8'>
			<div className='cont flex-col-md'>
				<div className='grid gap-7 md:grid-cols-2 lg:grid-cols-3'>
					<div className='flex-col-md items-start'>
						<Logo />
						<p className='text-xs opacity-70'>{CONFIG.FOOTER.DESCRIPTION}</p>
					</div>

					<nav className='flex-col-md items-start'>
						{CONFIG.HEADER.NAV.map(({ HREF, TITLE }) => (
							<Link key={HREF} href={HREF} className='hover-link'>
								{TITLE}
							</Link>
						))}
					</nav>

					<div className='flex-col-md items-start'>
						{CONFIG.FOOTER.INFO.map(({ HREF, ICON, TITLE }) => (
							<Link
								key={HREF}
								href={HREF}
								className='hover-link flex items-center gap-2'
								target='_blank'
								rel='noopener noreferrer'
							>
								<Icon name={ICON} />

								{TITLE}
							</Link>
						))}
					</div>
				</div>

				<Separator />

				<div className='flex-col-md sm:flex-row sm:items-center sm:justify-between text-xs'>
					<p>{CONFIG.FOOTER.COPYRIGHT}</p>

					<div className='flex flex-wrap gap-x-5 gap-y-2'>
						{CONFIG.FOOTER.LINKS.map(({ TITLE, HREF }) => (
							<Link
								key={TITLE}
								href={HREF}
								target='_blank'
								rel='noopener noreferrer'
								className='hover-link'
							>
								{TITLE}
							</Link>
						))}
					</div>
				</div>
			</div>
		</footer>
	)
}
