export const formatPrice = (price: number) => {
	return (
		Number(price).toLocaleString('ru-RU', {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		}) + ' ₽'
	)
}
