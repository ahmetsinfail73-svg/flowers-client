export const formatPhone = (value: string) => {
	const digits = value.replace(/\D/g, '')

	if (!digits) return ''

	const number = (
		digits[0] === '7' || digits[0] === '8' ? digits.slice(1) : digits
	).slice(0, 10)

	if (!number) return '+7'
	if (number.length < 4) return `+7 (${number}`
	if (number.length < 7) return `+7 (${number.slice(0, 3)}) ${number.slice(3)}`
	if (number.length < 9)
		return `+7 (${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6)}`
	return `+7 (${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6, 8)}-${number.slice(8)}`
}
