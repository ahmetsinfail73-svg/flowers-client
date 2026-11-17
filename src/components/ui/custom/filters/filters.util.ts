import type { useRouter } from 'next/navigation'

export const navigateTo = (
	push: ReturnType<typeof useRouter>['push'],
	pathname: string,
	params: URLSearchParams,
) => {
	push(`${pathname}?${params.toString()}`, { scroll: false })
}
