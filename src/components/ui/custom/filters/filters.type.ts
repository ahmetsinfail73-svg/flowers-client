import type { ISelectItem } from '@/constants/config.constant'

export interface ISelectFilterConfig {
	NAME: string
	PLACEHOLDER: string
	ITEMS: ISelectItem[]
}

export interface ITextFilterConfig {
	NAME: string
	PLACEHOLDER: string
}

export interface IFiltersConfig {
	SORT?: ISelectFilterConfig
	SELECT?: ISelectFilterConfig
	SWITCHES?: ITextFilterConfig[]
	PRICE?: {
		MIN: ITextFilterConfig
		MAX: ITextFilterConfig
	}
}
