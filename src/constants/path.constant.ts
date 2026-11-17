export class PATH {
	static DADATA_API =
		'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address'

	static ADDRESS_SUGGESTIONS = '/api/address-suggestions'

	static ROOT = '/'

	static CATALOG = '/catalog'

	static PRODUCT = (id: string) => `${PATH.CATALOG}/${id}`

	static DELIVERY = '/delivery'

	static ABOUT = '/about'

	static REGISTER = '/register'

	static LOGIN = '/login'

	static PROFILE = '/profile'
	static EDIT = `${this.PROFILE}/edit`
	static ORDERS = `${this.PROFILE}/orders`

	static CHECKOUT = '/checkout'

	static CART = '/cart'

	static ADMIN = '/admin'

	static ADMIN_PRODUCTS = `${this.ADMIN}/products`
	static ADMIN_PRODUCTS_NEW = `${this.ADMIN_PRODUCTS}/new`
	static ADMIN_PRODUCTS_EDIT = (id: string) => `${this.ADMIN_PRODUCTS}/${id}`

	static ADMIN_CATEGORIES = `${this.ADMIN}/categories`
	static ADMIN_CATEGORIES_NEW = `${this.ADMIN_CATEGORIES}/new`
	static ADMIN_CATEGORIES_EDIT = (id: string) =>
		`${this.ADMIN_CATEGORIES}/${id}`

	static ADMIN_USERS = `${this.ADMIN}/users`
	static ADMIN_USERS_NEW = `${this.ADMIN_USERS}/new`
	static ADMIN_USERS_EDIT = (id: string) => `${this.ADMIN_USERS}/${id}`
}
