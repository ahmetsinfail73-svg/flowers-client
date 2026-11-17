import { CONFIG } from '@/constants/config.constant'
import { PATH } from '@/constants/path.constant'
import type { IDadataSuggestResponse } from '@/types/dadata.type'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
	const { [CONFIG.DADATA.SEARCH_PARAM]: search } = (await req.json()) as {
		[CONFIG.DADATA.SEARCH_PARAM]?: string
	}

	if (!search || typeof search !== 'string') {
		return NextResponse.json<IDadataSuggestResponse>({ suggestions: [] })
	}

	// TODO: custom fetch
	const response = await fetch(PATH.DADATA_API, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Token ${process.env.DADATA_API_KEY}`,
		},
		body: JSON.stringify({
			query: search,
			count: CONFIG.DADATA.MAX_SUGGESTIONS,
			locations: CONFIG.DADATA.LOCATIONS,
			restrict_value: true,
		}),
		cache: 'force-cache',
		next: { revalidate: 86400 },
	})

	if (!response.ok) {
		return NextResponse.json<IDadataSuggestResponse>(
			{ suggestions: [] },
			{ status: response.status },
		)
	}

	const data: IDadataSuggestResponse = await response.json()

	return NextResponse.json(data)
}
