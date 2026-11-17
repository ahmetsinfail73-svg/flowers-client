export const isActivePath = (pathname: string | null, href: string) => {
	if (!pathname) return false

	const currentPath = pathname.replace(/\/+$/, '') || '/'
	const linkPath = href.replace(/\/+$/, '') || '/'

	return currentPath === linkPath
}
