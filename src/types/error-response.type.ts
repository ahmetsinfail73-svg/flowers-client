export interface IFieldError {
	field: string
	message: string
}

export interface IErrorResponse {
	detail: string | IFieldError[]
}
