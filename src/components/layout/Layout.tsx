import ReactQueryProvider from '@/providers/react-query.provider'
import type { ReactNode } from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import NavbarMenu from './navbar-menu/NavbarMenu'

interface IProps {
	children: ReactNode
}

export default function Layout({ children }: IProps) {
	return (
		<ReactQueryProvider>
			<div>
				<Header />
				{children}
				<Footer />
				<NavbarMenu />
			</div>
		</ReactQueryProvider>
	)
}
