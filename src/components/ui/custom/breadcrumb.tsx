import {
	Breadcrumb as BreadcrumbComponent,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/common/breadcrumb'
import type { ILinkItem } from '@/constants/config.constant'

interface IProps {
	items: ILinkItem[]
}

export default function Breadcrumb({ items }: IProps) {
	return (
		<BreadcrumbComponent>
			<BreadcrumbList>
				{items.map(({ HREF, TITLE }) => (
					<BreadcrumbItem key={HREF}>
						{HREF ? (
							<>
								<BreadcrumbLink href={HREF}>{TITLE}</BreadcrumbLink>
								<BreadcrumbSeparator />
							</>
						) : (
							<BreadcrumbPage>{TITLE}</BreadcrumbPage>
						)}
					</BreadcrumbItem>
				))}
			</BreadcrumbList>
		</BreadcrumbComponent>
	)
}
