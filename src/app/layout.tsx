import Layout from '@/components/layout/Layout'
import { CONFIG } from '@/constants/config.constant'
import { cn } from 'cn'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-montserrat',
	display: 'swap',
	preload: true,
})

export const metadata: Metadata = {
	title: {
		template: `%s | ${CONFIG.APP.NAME}`,
		default: CONFIG.APP.NAME,
	},
	description: CONFIG.APP.DESCRIPTION,
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html
			data-scroll-behavior='smooth'
			lang='ru'
			className={cn('antialiased', montserrat.variable)}
		>
			<body>
				<Layout>{children}</Layout>
			</body>
		</html>
	)
}
