export interface IDadataAddressData {
	postal_code: string | null
	country: string | null
	region: string | null
	city: string | null
	street: string | null
	house: string | null
	flat: string | null
	geo_lat: string | null
	geo_lon: string | null
	fias_id: string | null
	kladr_id: string | null
	qc_geo: string | null
}

export interface IDadataSuggestion {
	value: string
	unrestricted_value: string
	data: IDadataAddressData
}

export interface IDadataSuggestResponse {
	suggestions: IDadataSuggestion[]
}
