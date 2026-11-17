import { CONFIG } from '@/constants/config.constant'
import { PATH } from '@/constants/path.constant'
import type { IDadataSuggestResponse } from '@/types/dadata.type'

class DadataService {
	getAddressSuggestions = async (
		search: string,
	): Promise<IDadataSuggestResponse> => {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_CLIENT_URL}${PATH.ADDRESS_SUGGESTIONS}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ [CONFIG.DADATA.SEARCH_PARAM]: search }),
			},
		)

		if (!response.ok) {
			return { suggestions: [] }
		}

		return response.json()
	}
}

export const dadataService = new DadataService()
