import type { TypeIconName } from '@/components/ui/custom/icon'
import type { IAdminStats } from '@/types/admin.type'
import {
	OrderDeliveryMethodEnum,
	OrderPaymentStatusEnum,
	type IOrder,
} from '@/types/order.type'
import type { IProduct } from '@/types/product.type'
import { UserRoleEnum, type IUser } from '@/types/user.type'
import { formatDate } from '@/utils/format-date.util'
import { normalizePhone } from '@/utils/normalize-phone.util'
import { PATH } from './path.constant'

interface IImage {
	SRC: string
	ALT: string
}

export interface ILinkItem {
	TITLE: string
	HREF: string
}

export interface ISelectItem {
	TITLE: string
	VALUE: string
}

interface IIconILink {
	HREF: string
	ICON: TypeIconName
}

interface ILinkIconItem {
	TITLE: string
	HREF: string
	ICON: TypeIconName
}

interface IIconItem {
	TITLE: string
	ICON: TypeIconName
}

interface IFullTextItem {
	TITLE: string
	DESCRIPTION: string
}

interface IFullIconTextItem {
	TITLE: string
	DESCRIPTION: string
	ICON: TypeIconName
}

interface IFullImageTextItem {
	TITLE: string
	DESCRIPTION: string
	IMAGE: IImage
}

export interface IFullTextSelectItem {
	TITLE: string
	DESCRIPTION: string
	VALUE: string
}

class Config {
	// DADATA
	DADATA = {
		SEARCH_PARAM: 'search',
		MAX_SUGGESTIONS: 10,
		LOCATIONS: [{ city: 'Казань' }],
	}

	// APP
	APP = {
		NAME: 'Люкс Букет',
		DESCRIPTION: 'Цветы и букеты в Казани',
		ADDRESS: 'Чистопольская, 61А',
		PHONE: '+7(993)420-08-88',
		WORKING_HOURS: 'Пн-Вс 08:00-21:30',
        DELIVERY_WORKING_HOURS: 'Пн-сб - с 08:15 до 21:30 \n Вс - с 9:15 до 20:00',
		LOGO: {
			SRC: '/images/logo.webp',
			ALT: 'Логотип',
		} satisfies IImage,
		YANDEX_MAPS_URL: 'https://yandex.ru/maps/-/CCU5k7g~',
		GOOGLE_MAPS_URL: 'https://maps.app.goo.gl/had1uk2s3pifoCgZ6',
		GOOGLE_MAPS_EMBED_URL:
			'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2241.466828837725!2d49.132441799999995!3d55.8198561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415ead571c5bffff%3A0x5796e25f5502de4f!2z0YPQuy4g0KfQuNGB0YLQvtC_0L7Qu9GM0YHQutCw0Y8sIDYx0LAsINCa0LDQt9Cw0L3RjCwg0KDQtdGB0L8uINCi0LDRgtCw0YDRgdGC0LDQvSwg0KDQvtGB0YHQuNGPLCA0MjAxMjQ!5e0!3m2!1sru!2sde!4v1793216523411!5m2!1sru!2sde',
		IMAGE_NOT_FOUND: '/images/image-not-found.png',
	}

	// HOME
	HOME = {
		METADATA: {
			TITLE: 'Главная',
			DESCRIPTION: `Свежие цветы и букеты в Казани от магазина «${this.APP.NAME}». Сборка после заказа, фото перед отправкой, доставка по городу и самовывоз.`,
		},
		SUPER_TITLE: `ЦВЕТОЧНЫЙ МАГАЗИН · ${this.APP.ADDRESS.toUpperCase()}`,
		TITLE: 'Свежий букет по Казани за 15 минут',
		DESCRIPTION: `Витрины пополняем каждый день, букет собираем после вашего заказа и сразу отдаем курьеру. Хотите забрать сами — заходите в наш магазин по адресу ${this.APP.ADDRESS}.`,
		CATALOG_BUTTON: {
			TITLE: 'Выбрать букет',
			HREF: PATH.CATALOG,
		} satisfies ILinkItem,
		DELIVERY_BUTTON: {
			TITLE: 'Как мы доставляем?',
			HREF: PATH.DELIVERY,
		} satisfies ILinkItem,
		INFO: [
			{
				TITLE: 'Курьер по городу от 15 минут',
				ICON: 'Truck',
			},
			{
				TITLE: this.APP.WORKING_HOURS,
				ICON: 'Clock',
			},
			{
				TITLE: 'Фото букета до отправки',
				ICON: 'Camera',
			},
		] satisfies IIconItem[],
		ADVANTAGES: [
			'ДОСТАВКА ОТ 15 МИНУТ',
			'5000+ ВАРИАНТОВ БУКЕТОВ',
			'ОФОРМЛЕНИЕ ЛЮБЫХ ПРАЗДНИКОВ',
			`МАГАЗИН ПО АДРЕСУ УЛ. ЧИСТОПОЛЬСКАЯ, Д. 61А`,
		],
		SHOWCASE: {
			SUPER_TITLE: 'НОВОЕ В ВИТРИНЕ',
			TITLE: 'Что собрали на этой неделе',
			DESCRIPTION:
				'Поставка приходит несколько раз в неделю, и витрина меняется вместе с ней. Тут последнее, что появилось в каталоге.',
		},
		CATALOG: {
			SUPER_TITLE: 'РАЗДЕЛЫ КАТАЛОГА',
			TITLE: 'С чего начать выбор',
			DESCRIPTION:
				'Больше тысячи позиций, и они правда разные: от монобукета за 3200 до корзины на 301 розу. Начните с раздела — дальше отфильтруете по цене.',
			CATALOG_BUTTON: {
				TITLE: 'Весь каталог',
				HREF: PATH.CATALOG,
			} satisfies ILinkItem,
		},
		DELIVERY: {
			SUPER_TITLE: 'ДОСТАВКА ПО КАЗАНИ',
			TITLE: 'Ближний адрес — 15 минут',
			DESCRIPTION:
				'Букет собирают после заказа и сразу передают курьеру. В жару везем с водой, чтобы цветы доехали такими же, как ушли с витрины.',
			IMAGE: {
				SRC: '/images/home/delivery.jpg',
				ALT: 'Доставка',
			} satisfies IImage,
			INFO: [
				{
					TITLE: 'К нужному часу или как можно скорее',
					ICON: 'Clock',
				},
				{
					TITLE: 'В жару букет едет в воде',
					ICON: 'Droplets',
				},
				{
					TITLE: 'Казань и ближние поселки',
					ICON: 'MapPin',
				},
				{
					TITLE: `Самовывоз из магазина по адресу ${this.APP.ADDRESS}`,
					ICON: 'Store',
				},
			] satisfies IIconItem[],
			CATALOG_BUTTON: {
				TITLE: 'Заказать доставку',
				HREF: PATH.CATALOG,
			} satisfies ILinkItem,
			DELIVERY_BUTTON: {
				TITLE: 'Условия доставки',
				HREF: PATH.DELIVERY,
			} satisfies ILinkItem,
		},
	}

	// CATALOG
	CATALOG = {
		METADATA: {
			TITLE: 'Каталог',
			DESCRIPTION: `Каталог цветов и букетов магазина «${this.APP.NAME}» в Казани: монобукеты, композиции, коробки и корзины. Выбор по категории и цене, доставка и самовывоз.`,
		},
		TITLE: 'Каталог',
		DESCRIPTION:
			'Больше тысячи позиций: монобукеты, авторские композиции, коробки и корзины. Фильтруйте по цене — самый простой букет стоит 3200 ₽.',
		IMAGE: {
			SRC: '/images/catalog/hero.jpg',
			ALT: 'Каталог',
		} satisfies IImage,
		INFO: [
			'Доставка от 15 минут',
			'Сборка после заказа',
			`Самовывоз по адресу ${this.APP.ADDRESS}`,
		],
	}

	// PRODUCTS_FILTER
	PRODUCTS_FILTER = {
		FOUND: (
			showCount: number,
			totalCount: number,
			page: number,
			allPage: number,
		) =>
			`Найдено ${showCount} из ${totalCount} товаров (страница ${page} из ${allPage})`,
		FILTERS: {
			CATEGORIES: {
				NAME: 'categories',
				PLACEHOLDER: 'Категории',
			},
			PRICE: {
				MIN: {
					NAME: 'min',
					PLACEHOLDER: 'Цена от',
				},
				MAX: {
					NAME: 'max',
					PLACEHOLDER: 'Цена до',
				},
			},
			IS_READY: {
				NAME: 'is_ready',
				PLACEHOLDER: 'Только витринные',
			},
			IS_NOT_SHOW: {
				NAME: 'is_not_show',
				PLACEHOLDER: 'Только скрытые',
			},
			SORT: {
				NAME: 'sort',
				PLACEHOLDER: 'Сортировать по',
				ITEMS: [
					{
						TITLE: 'Новые',
						VALUE: 'new',
					},
					{
						TITLE: 'Старые',
						VALUE: 'old',
					},
					{
						TITLE: 'Дешевле',
						VALUE: 'cheap',
					},
					{
						TITLE: 'Дороже',
						VALUE: 'expensive',
					},
					{
						TITLE: 'Название: А-Я',
						VALUE: 'asc',
					},
					{
						TITLE: 'Название: Я-А',
						VALUE: 'desc',
					},
				] satisfies ISelectItem[],
			},
			SEARCH: {
				NAME: 'search',
				PLACEHOLDER: 'Поиск...',
			},
		},
	}

	// PRODUCT_PAGE
	PRODUCT_PAGE = {
		BREADCRUMBS: (TITLE: string) =>
			[
				{
					TITLE: this.CATALOG.METADATA.TITLE,
					HREF: PATH.CATALOG,
				},
				{
					TITLE,
					HREF: '',
				},
			] satisfies ILinkItem[],
		COMPOUND: {
			TITLE: 'Состав: ',
			ITEM: (count: number) => `${count} шт.`,
		},
		COUNT: {
			TITLE: 'Оставшееся количество: ',
			ITEM: (count: number) => `${count} шт.`,
		},
	}

	// DELIVERY
	DELIVERY = {
		METADATA: {
			TITLE: 'Доставка',
			DESCRIPTION:
				'Доставка цветов и букетов по Казани и ближним поселкам от 15 минут. Собираем букет после заказа, присылаем фото перед отправкой. Самовывоз бесплатно.',
		},
		WORK: {
			TITLE: 'От заказа до вручения',
			INFO: [
				{
					TITLE: 'Выбор цветов',
					DESCRIPTION: `Оформите заказ на нашем сайте в разделе Каталог. Также мы готовы помочь Вам с выбором по телефону: ${this.APP.PHONE}. Также вы можете написать нам в WhatsApp, Telegram или MAX`,
				},
				{
					TITLE: 'Согласование и сборка букета',
					DESCRIPTION:
						'Наши специалисты подберут для Вас самые лучшие цветы и соберут композицию в течении 15 минут, после чего будет направлено фото для согласования.',
				},
				{
					TITLE: 'Доставка',
					DESCRIPTION:
						'Курьер забирает букет из магазина и направляется к получателю. В холодную погоду букет будет утеплён, а в жаркую букет будет направлен с аквабоксом.',
				},
				{
					TITLE: 'Вручение',
					DESCRIPTION:
						'Курьер предварительно свяжется с Вами для удостоверенности, что получатель на месте.',
				},
			] satisfies IFullTextItem[],
			CONDITIONS: {
				TITLE: 'Условия и стоимость',
				DESCRIPTION:
					'Возим по Казани и в ближние поселки. Ниже коротко — про зону, деньги и время.',
				INFO: [
					{
						TITLE: 'Территория доставки',
						DESCRIPTION:
							'Доставляем по всей Казани и в ближайшие населенные пункты .',
					},
					{
						TITLE: 'Стоимость',
						DESCRIPTION:
							'В ближайшие районы от адреса Чистопольская 61а - 300₽. \n В отдаленные районы рассчитывается индивидуально при согласовании заказа.',
					},
					{
						TITLE: 'Время доставки',
						DESCRIPTION:
							'От 15 минут по Ново-Савиновскому району г. Казани.',
					},
					{
						TITLE: 'Начинает доставлять',
						DESCRIPTION: this.APP.DELIVERY_WORKING_HOURS,
					},
					{
						TITLE: 'Самовывоз',
						DESCRIPTION: `Забрать заказ самостоятельно можно по адресу - ${this.APP.ADDRESS}. Вход между домами 61а и 61б. Ориентир со стороны дороги ул. Фатыха Амирхана.`,
					},
				] satisfies IFullTextItem[],
			},
		},
		IMPORTANT: {
			SUPER_TITLE: 'ЧТО ВАЖНО',
			TITLE: 'Чтобы букет доехал таким же, каким вышел',
			IMAGE: {
				SRC: '/images/delivery/important.jpg',
				ALT: 'Важное',
			} satisfies IImage,
			INFO: [
				{
					TITLE: 'Едет с водой',
					DESCRIPTION:
						'В жару ставим букет в колбу с водой — доезжает таким же свежим.',
					ICON: 'Droplets',
				},
				{
					TITLE: 'Фото перед отправкой',
					DESCRIPTION: 'Покажем собранный букет до того, как курьер выедет.',
					ICON: 'Camera',
				},
				{
					TITLE: 'Анонимно, если нужно',
					DESCRIPTION:
						'Не назовем отправителя и вложим открытку с вашими словами.',
					ICON: 'Gift',
				},
				{
					TITLE: 'Бережная упаковка',
					DESCRIPTION:
						'Везем в коробке или защитной обертке, чтобы бутоны доехали целыми.',
					ICON: 'Shield',
				},
			] satisfies IFullIconTextItem[],
		},
		QUESTIONS: {
			SUPER_TITLE: 'ВОПРОСЫ',
			TITLE: 'Коротко о том, что чаще спрашивают',
			INFO: [
				{
					TITLE: 'Правда за 15 минут?',
					DESCRIPTION:
						'На ближние адреса — обычно от пятнадцати минут после сборки. Точное время зависит от адреса и загруженности курьеров.',
				},
				{
					TITLE: 'Возите за город?',
					DESCRIPTION:
						'Да, по ближним поселкам возим по договоренности. Стоимость уточним при подтверждении.',
				},
				{
					TITLE: 'Можно ко времени?',
					DESCRIPTION:
						'Да. Укажите удобное время в комментарии к заказу или сообщите менеджеру.',
				},
				{
					TITLE: 'Как оплатить?',
					DESCRIPTION:
						'Менеджер согласует удобный способ оплаты при подтверждении заказа.',
				},
				{
					TITLE: 'Получатель не знает про доставку',
					DESCRIPTION:
						'Передадим букет анонимно и не оставим его у двери без получателя.',
				},
				{
					TITLE: 'А если нужного цветка нет?',
					DESCRIPTION:
						'Флорист предложит равноценную замену и покажет букет до отправки.',
				},
			] satisfies IFullTextItem[],
		},
		ALERT: {
			TITLE: 'Соберем и привезем сегодня',
			DESCRIPTION:
				'Выберите букет в каталоге — на ближний адрес курьер доедет за пятнадцать минут.',
			CATALOG_BUTTON: {
				TITLE: 'Собрать букет',
				HREF: PATH.CATALOG,
			} satisfies ILinkItem,
		},
	}

	// ABOUT
	ABOUT = {
		METADATA: {
			TITLE: 'О магазине',
			DESCRIPTION: `Цветочный магазин «${this.APP.NAME}» в Казани по адресу ${this.APP.ADDRESS}. Узнайте, как мы выбираем цветы и собираем букеты, посмотрите фотографии и контакты.`,
		},
		TITLE: 'Витрина, где выбирают глазами',
		DESCRIPTION: `«${this.APP.NAME}» - это витрина, где можно собрать букет или композицию для себя, своих близких и родных из лучших цветов, привоз которых, осуществляется с лучших плантаций мира.`,
		IMAGE: {
			SRC: '/images/about/hero.jpg',
			ALT: 'О магазине',
		} satisfies IImage,
		CATALOG_BUTTON: {
			TITLE: 'Смотреть каталог',
			HREF: PATH.CATALOG,
		} satisfies ILinkItem,
		DELIVERY_BUTTON: {
			TITLE: 'Условия доставки',
			HREF: PATH.DELIVERY,
		} satisfies ILinkItem,
		INFO: [
			this.APP.ADDRESS,
			'БОЛЕЕ 1000 ПОЗИЦИЙ',
			'БУКЕТЫ ОТ 3200 ₽',
			this.APP.WORKING_HOURS,
		],
		COLLECT: {
			TITLE: 'Наша витрина',
			DESCRIPTION: `Мы предлагаем широкий ассортимент цветов, выбор упаковки и варианты сборки. 
			Корзины для композиций любых размеров. В магазине так же представлены игрушки для любого повода.`,
			IMAGE: {
				SRC: '/images/about/hall-2.jpg',
				ALT: 'Зал 2',
			} satisfies IImage,
		},
		REVIEWS: {
			TITLE: 'Отзывы с Яндекс Карт',
			INFO: [
				{
					TITLE: 'Алиса Прыгунова',
					DESCRIPTION:
						'Огромный выбор цветов, очень вежливый и милый персонал, доставили все вовремя, огромное спасибо, прекрасный букет!',
				},
				{
					TITLE: 'Руслан Д.',
					DESCRIPTION:
						'Заказывал букет, свежие цветы, учли все пожелания, вежливый персонал, буду заказывать в следующий раз, советую.',
				},
				{
					TITLE: 'Ангелина Ми',
					DESCRIPTION:
						'Огромный выбор цветов, как на свой вкус, так и букетов. Быстрое и качественное обслуживание и всегда своевременная доставка.',
				},
				{
					TITLE: 'Севинч М.',
					DESCRIPTION:
						'Нашла для себя новую цветочную студию с большим выбором цветов и по низким ценам, красиво собрали по моему вкусу. Процветания магазину.',
				},
				{
					TITLE: 'Азалия Зубайдуллина',
					DESCRIPTION:
						'Очень красивые букеты, все понравилось! Милый персонал.',
				},
			] satisfies IFullTextItem[],
		},
		SHOP: {
			TITLE: 'Наш магазин',
			INFO: [
				{
					IMAGE: {
						SRC: '/images/about/fridge.jpg',
						ALT: 'Наша витрина',
					},
					TITLE: 'Наша витрина',
					DESCRIPTION:
						'Поставки цветов несколько раз в неделю.',
				},
				{
					IMAGE: {
						SRC: '/images/about/hall-3.jpg',
						ALT: 'Ассортимент',
					},
					TITLE: 'Ассортимент',
					DESCRIPTION: 'Помимо цветов есть выбор игрушек, корзин и и упаковок.',
				},
				{
					IMAGE: {
						SRC: '/images/about/work.jpg',
						ALT: 'Готовая онлайн-витрина',
					},
					TITLE: 'Готовая онлайн-витрина',
					DESCRIPTION:
						'Каждый день обновляем витрину готовых букетов и композиций. Следим за качеством каждого цветка!',
				},
			] satisfies IFullImageTextItem[],
		},
		ENTER: {
			TITLE: 'Мы находимся',
			DESCRIPTION: `Казань, ${this.APP.ADDRESS}. ${this.APP.WORKING_HOURS}. Телефон ${this.APP.PHONE}`,
			CALL_BUTTON: {
				TITLE: 'Позвонить',
				HREF: `tel:${this.APP.PHONE}`,
			} satisfies ILinkItem,
			MAP_BUTTON: {
				TITLE: 'Посмотреть на карте',
				HREF: this.APP.GOOGLE_MAPS_URL,
			} satisfies ILinkItem,
		},
	}

	// LOGIN
	LOGIN = {
		METADATA: {
			TITLE: 'Вход в систему',
			DESCRIPTION: `Вход в личный кабинет магазина «${this.APP.NAME}»: доступ к контактным данным, настройкам профиля и истории заказов.`,
		},
	}

	// REGISTER
	REGISTER = {
		METADATA: {
			TITLE: 'Регистрация',
			DESCRIPTION: `Создайте личный кабинет в магазине «${this.APP.NAME}», чтобы сохранять контактные данные и просматривать историю заказов цветов и букетов.`,
		},
	}

	// USER
	USER = {
		PHONE_NUMBER: 'Номер телефона',
		NAME: 'Имя',
		PASSWORD: 'Пароль',
		OLD_PASSWORD: 'Старый пароль',
		NEW_PASSWORD: 'Новый пароль',
	}

	// ORDER
	ORDER = {
		CUSTOMER_NAME: 'Имя покупателя',
		CUSTOMER_PHONE: 'Телефон покупателя',
		CUSTOMER_EMAIL: 'Почта покупателя',
		RECIPIENT_NAME: 'Имя получателя',
		RECIPIENT_PHONE: 'Телефон получателя',
		DELIVERY_METHOD: [
			{
				TITLE: 'Доставка',
				VALUE: OrderDeliveryMethodEnum.DELIVERY,
				DESCRIPTION: 'Доставка курьером по указанному адресу',
			},
			{
				TITLE: 'Самовывоз',
				VALUE: OrderDeliveryMethodEnum.PICKUP,
				DESCRIPTION: 'Самовывоз из магазина',
			},
		] satisfies IFullTextSelectItem[],
		DELIVERY_DATE: 'Дата получения',
		DELIVERY_TIME_START: 'Время с',
		DELIVERY_TIME_END: 'Время до',
		SHIPPING_ADDRESS: 'Адрес доставки',
		COMMENT: 'Комментарий к заказу',
	}

	// CATEGORY
	CATEGORY = {
		TITLE: 'Название',
		IMAGE_URL: 'Изображение',
	}

	// PRODUCT
	PRODUCT = {
		TITLE: 'Название',
		DESCRIPTION: 'Описание',
		PRICE: 'Цена',
		COUNT: 'Количество',
		IS_SHOW: 'Показывать в каталоге',
		IMAGE_URLS: 'Изображения',
		IS_READY: 'Витринный',
		CATEGORY_ID: 'Категория',
		COMPOUND: 'Состав',
	}

	// PROFILE
	PROFILE = {
		METADATA: {
			TITLE: 'Профиль',
			DESCRIPTION: `Личный кабинет покупателя магазина «${this.APP.NAME}»: контактные данные для связи по заказу, настройки профиля и переход к истории покупок.`,
		},
		LOGOUT_BUTTON: 'Выйти',
		DETAILS: {
			TITLE: 'Личные данные',
			DESCRIPTION:
				'Ваши данные, которые мы используем для связи по поводу заказа.',
			INFO: (user: IUser) =>
				[
					{
						TITLE: this.USER.NAME,
						DESCRIPTION: user.name,
					},
					{
						TITLE: this.USER.PHONE_NUMBER,
						DESCRIPTION: user.phone_number,
					},
				] satisfies IFullTextItem[],
		},
	}

	// PROFILE_EDIT
	PROFILE_EDIT = {
		METADATA: {
			TITLE: 'Изменить профиль',
			DESCRIPTION: `Изменение контактных данных и номера телефона в личном кабинете магазина «${this.APP.NAME}».`,
		},
		FORM: 'Изменение контактных данных',
		PHONE_FORM: 'Изменение номера телефона',
		SAVE_BUTTON: 'Сохранить изменения',
	}

	// PROFILE_ORDERS
	PROFILE_ORDERS = {
		METADATA: {
			TITLE: 'Мои заказы',
			DESCRIPTION: `История заказов в магазине «${this.APP.NAME}»: состав и стоимость покупок, даты получения и текущие статусы.`,
		},
	}

	// PROFILE_LAYOUT
	PROFILE_LAYOUT = {
		NAV: [
			{ TITLE: this.PROFILE.METADATA.TITLE, HREF: PATH.PROFILE },
			{ TITLE: this.PROFILE_EDIT.METADATA.TITLE, HREF: PATH.EDIT },
			{ TITLE: this.PROFILE_ORDERS.METADATA.TITLE, HREF: PATH.ORDERS },
		] satisfies ILinkItem[],
		SUPER_TITLE: 'ЛИЧНЫЙ КАБИНЕТ',
		TITLE: 'Ваш профиль',
		DESCRIPTION: 'Ваши контактные данные, история заказов и настройки.',
	}

	// CART
	CART = {
		METADATA: {
			TITLE: 'Корзина',
			DESCRIPTION: 'Товары, выбранные для заказа.',
		},
		SUPER_TITLE: 'ВАШ ЗАКАЗ',
		TITLE: 'Корзина',
		DESCRIPTION: 'Проверьте товары и их количество перед оформлением заказа.',
		TOTAL_LABEL: 'Итого',
		CHECKOUT_BUTTON: {
			HREF: PATH.CHECKOUT,
			TITLE: 'Оформить заказ',
		} satisfies ILinkItem,
	}

	// CHECKOUT
	CHECKOUT = {
		METADATA: {
			TITLE: 'Оформление заказа',
			DESCRIPTION: `Оформление заказа цветов в магазине «${this.APP.NAME}»: контакты покупателя и получателя, выбор доставки или самовывоза, даты и времени получения.`,
		},
		SUPER_TITLE: 'ВАШ ЗАКАЗ',
		TITLE: 'Оформление заказа',
		DESCRIPTION:
			'Укажите контакты покупателя и получателя, затем выберите способ и время получения букета.',
		CART_ITEM: {
			QUANTITY: (count: number) => `${count} шт.`,
		},
		CUSTOMER_TITLE: 'Контакты покупателя',
		CUSTOMER_FROM_PROFILE: 'Использовать данные из профиля',
		RECIPIENT_TITLE: 'Контакты получателя',
		RECIPIENT_FROM_PROFILE: 'Получатель — это вы',
		DELIVERY_TITLE: 'Способ получения',
		SUMMARY_TITLE: 'Оформление заказа',
		TOTAL_LABEL: 'Итого',
		SUBMIT_BUTTON: 'Оформить заказ',
	}

	// ADMIN_USERS
	ADMIN_USERS = {
		METADATA: {
			TITLE: 'Пользователи',
			DESCRIPTION: `Управление пользователями магазина «${this.APP.NAME}»: поиск, фильтрация по ролям и просмотр контактных данных в панели администратора.`,
		},
		FOUND: (
			showCount: number,
			totalCount: number,
			page: number,
			allPage: number,
		) =>
			`Найдено ${showCount} из ${totalCount} пользователей (страница ${page} из ${allPage})`,
		ITEM: {
			DESCRIPTION_LINK: (phone_number: string): ILinkItem => ({
				HREF: `tel:${phone_number}`,
				TITLE: phone_number,
			}),
			BADGE: {
				[UserRoleEnum.CUSTOMER]: 'Пользователь',
				[UserRoleEnum.MANAGER]: 'Менеджер',
				[UserRoleEnum.ADMIN]: 'Администратор',
			},
		},
		FILTERS: {
			ROLES: {
				NAME: 'roles',
				PLACEHOLDER: 'Роли',
				ITEMS: [
					{
						TITLE: 'Администраторы',
						VALUE: UserRoleEnum.ADMIN,
					},
					{
						TITLE: 'Менеджеры',
						VALUE: UserRoleEnum.MANAGER,
					},
					{
						TITLE: 'Пользователи',
						VALUE: UserRoleEnum.CUSTOMER,
					},
				] satisfies ISelectItem[],
			},
			SORT: {
				NAME: 'sort',
				PLACEHOLDER: 'Сортировать по',
				ITEMS: [
					{
						TITLE: 'Новые',
						VALUE: 'new',
					},
					{
						TITLE: 'Старые',
						VALUE: 'old',
					},
					{
						TITLE: 'Имя: А-Я',
						VALUE: 'asc',
					},
					{
						TITLE: 'Имя: Я-А',
						VALUE: 'desc',
					},
				] satisfies ISelectItem[],
			},
			SEARCH: {
				NAME: 'search',
				PLACEHOLDER: 'Поиск...',
			},
		},
	}

	// ADMIN_CATEGORIES
	ADMIN_CATEGORIES = {
		METADATA: {
			TITLE: 'Категории',
			DESCRIPTION: `Управление категориями каталога магазина «${this.APP.NAME}»: поиск, сортировка, создание и редактирование разделов.`,
		},
		FOUND: (
			showCount: number,
			totalCount: number,
			page: number,
			allPage: number,
		) =>
			`Найдено ${showCount} из ${totalCount} категорий (страница ${page} из ${allPage})`,
		ITEM: {
			DESCRIPTION: (count: number): string => `Товаров: ${count}`,
		},
		FILTERS: {
			SORT: {
				NAME: 'sort',
				PLACEHOLDER: 'Сортировать по',
				ITEMS: [
					{
						TITLE: 'Новые',
						VALUE: 'new',
					},
					{
						TITLE: 'Старые',
						VALUE: 'old',
					},
					{
						TITLE: 'Имя: А-Я',
						VALUE: 'asc',
					},
					{
						TITLE: 'Имя: Я-А',
						VALUE: 'desc',
					},
				] satisfies ISelectItem[],
			},
			SEARCH: {
				NAME: 'search',
				PLACEHOLDER: 'Поиск...',
			},
		},
	}

	// NEW_CATEGORY
	NEW_CATEGORY = {
		METADATA: {
			TITLE: 'Новая категория',
			DESCRIPTION: `Создание категории каталога магазина «${this.APP.NAME}»: название и изображение нового раздела.`,
		},
		TITLE: 'Новая категория',
	}

	// ADMIN_PRODUCTS
	ADMIN_PRODUCTS = {
		METADATA: {
			TITLE: 'Товары',
			DESCRIPTION: `Управление товарами магазина «${this.APP.NAME}»: поиск и фильтрация, цены, остатки, категории и видимость в каталоге.`,
		},
		ITEM: {
			DESCRIPTION: (product: IProduct) =>
				`${product.category.title} - ${product.count} шт. - ${product.is_ready ? 'витринный' : 'не витринный'} - ${product.is_show ? 'не скрыт' : 'скрыт'}`,
		},
	}

	// NEW_PRODUCT
	NEW_PRODUCT = {
		METADATA: {
			TITLE: 'Новый товар',
			DESCRIPTION: `Добавление товара в каталог магазина «${this.APP.NAME}»: название, описание, цена, изображения, категория и состав букета.`,
		},
		TITLE: 'Новый товар',
	}

	// ADMIN
	ADMIN = {
		METADATA: {
			TITLE: 'Админ-панель',
			DESCRIPTION: `Панель управления магазином «${this.APP.NAME}»: количество товаров, категорий и пользователей, переход к разделам администрирования.`,
		},
		ITEMS: (
			stats: IAdminStats,
		): {
			TITLE: string
			DESCRIPTION: string
			HREF: string
			COUNT: number
		}[] => [
			{
				TITLE: this.ADMIN_USERS.METADATA.TITLE,
				DESCRIPTION: 'Контакты и роли',
				COUNT: stats.users,
				HREF: PATH.ADMIN_USERS,
			},
			{
				TITLE: this.ADMIN_CATEGORIES.METADATA.TITLE,
				DESCRIPTION: 'Разделы каталога',
				COUNT: stats.categories,
				HREF: PATH.ADMIN_CATEGORIES,
			},
			{
				TITLE: this.ADMIN_PRODUCTS.METADATA.TITLE,
				DESCRIPTION: 'Товары каталога',
				COUNT: stats.products,
				HREF: PATH.ADMIN_PRODUCTS,
			},
		],
		OPEN_BUTTON: 'Открыть раздел',
	}

	// ADMIN_LAYOUT
	ADMIN_LAYOUT = {
		NAV: [
			{ TITLE: this.ADMIN.METADATA.TITLE, HREF: PATH.ADMIN },
			{ TITLE: this.ADMIN_USERS.METADATA.TITLE, HREF: PATH.ADMIN_USERS },
			{
				TITLE: this.ADMIN_CATEGORIES.METADATA.TITLE,
				HREF: PATH.ADMIN_CATEGORIES,
			},
			{
				TITLE: this.ADMIN_PRODUCTS.METADATA.TITLE,
				HREF: PATH.ADMIN_PRODUCTS,
			},
		] satisfies ILinkItem[],
		SUPER_TITLE: 'УПРАВЛЕНИЕ МАГАЗИНОМ',
		TITLE: 'Админ-панель',
		DESCRIPTION: 'Товары, категории и пользователи магазина.',
	}

	// HEADER
	HEADER = {
		RIGHT_MENU: {
			CALL_BUTTON: {
				HREF: `tel:${this.APP.PHONE}`,
				ICON: 'Phone',
			} satisfies IIconILink,
			LOGIN_BUTTON: {
				TITLE: 'Войти',
				HREF: PATH.LOGIN,
			} satisfies ILinkItem,
			NAV: [
				{
					TITLE: this.PROFILE.METADATA.TITLE,
					HREF: PATH.PROFILE,
					ICON: 'User',
				},
				{
					TITLE: this.PROFILE_EDIT.METADATA.TITLE,
					HREF: PATH.EDIT,
					ICON: 'Settings',
				},
				{
					TITLE: this.PROFILE_ORDERS.METADATA.TITLE,
					HREF: PATH.ORDERS,
					ICON: 'ClipboardList',
				},
			] satisfies ILinkIconItem[],
		},
		NAV: [
			{
				TITLE: this.HOME.METADATA.TITLE,
				HREF: PATH.ROOT,
				ICON: 'House',
			},
			{
				TITLE: this.CATALOG.METADATA.TITLE,
				HREF: PATH.CATALOG,
				ICON: 'LayoutGrid',
			},
			{
				TITLE: this.DELIVERY.METADATA.TITLE,
				HREF: PATH.DELIVERY,
				ICON: 'Truck',
			},
			{
				TITLE: this.ABOUT.METADATA.TITLE,
				HREF: PATH.ABOUT,
				ICON: 'Info',
			},
		] satisfies ILinkIconItem[],
	}

	// FOOTER
	FOOTER = {
		DESCRIPTION: 'Цветы и букеты в Казани',
		COPYRIGHT: `© ${new Date().getFullYear()} ${this.APP.NAME}. Все права защищены.`,
		INFO: [
			{
				HREF: `tel:${this.APP.PHONE}`,
				ICON: 'Phone',
				TITLE: this.APP.PHONE,
			},
			{
				HREF: this.APP.GOOGLE_MAPS_URL,
				ICON: 'MapPin',
				TITLE: this.APP.ADDRESS,
			},
			{
				HREF: this.APP.YANDEX_MAPS_URL,
				ICON: 'Clock',
				TITLE: this.APP.WORKING_HOURS,
			},
		] satisfies ILinkIconItem[],
		LINKS: [
			{
				TITLE: 'Whatsapp',
				HREF: `https://wa.me/${normalizePhone(this.APP.PHONE)}`,
			},
			{
				TITLE: 'Telegram',
				HREF: `https://t.me/+${normalizePhone(this.APP.PHONE)}`,
			},
			{
				TITLE: 'Вконтакте',
				HREF: `https://vk.com/id2300103`,
			},
		] satisfies ILinkItem[],
	}

	// UI
	UI = {
		ADDRESS_SUGGESTIONS: {
			START: 'Начните вводить адрес',
			NOT_FOUND: 'Ничего не найдено',
		},
		COMPOUND_FIELD: {
			NAME: {
				LABEL: 'Название',
				PLACEHOLDER: 'Роза',
			},
			QUANTITY: {
				LABEL: 'Количество',
				PLACEHOLDER: '3',
			},
			DELETE_BUTTON: 'Удалить',
			ADD_BUTTON: 'Добавить',
		},
		BACK_BUTTON: {
			TITLE: 'Назад',
		},
		FILTERS: {
			APPLY_BUTTON: 'Применить',
			RESET_BUTTON: 'Сбросить фильтры',
			SEARCH_BUTTON: 'Искать',
			CREATE_BUTTON: 'Создать',
		},
		CART_BUTTON: {
			TITLE: 'В корзину',
		},
		ORDER_ITEM: {
			TITLE: (number: number) => `Заказ #${number}`,
			DESCRIPTION: (order: IOrder) =>
				`Создан: ${formatDate(order.created_at)} · ${order.delivery_method === OrderDeliveryMethodEnum.DELIVERY ? 'Доставка' : 'Самовывоз'}: ${formatDate(order.delivery_date)}`,
			ICON: {
				[OrderDeliveryMethodEnum.DELIVERY]: 'Truck',
				[OrderDeliveryMethodEnum.PICKUP]: 'Store',
			} as Record<OrderDeliveryMethodEnum, TypeIconName>,
			STATUS: {
				[OrderPaymentStatusEnum.PENDING]: {
					TITLE: 'Ожидает оплаты',
					COLOR: '#F59E0B',
				},
				[OrderPaymentStatusEnum.PAID]: {
					TITLE: 'Оплачен',
					COLOR: '#10B981',
				},
				[OrderPaymentStatusEnum.FULFILLING]: {
					TITLE: 'В сборке',
					COLOR: '#3B82F6',
				},
				[OrderPaymentStatusEnum.FULFILLED]: {
					TITLE: 'Собран',
					COLOR: '#6366F1',
				},
				[OrderPaymentStatusEnum.SHIPPING]: {
					TITLE: 'В пути',
					COLOR: '#8B5CF6',
				},
				[OrderPaymentStatusEnum.DELIVERED]: {
					TITLE: 'Доставлен',
					COLOR: '#059669',
				},
				[OrderPaymentStatusEnum.FAILED]: {
					TITLE: 'Ошибка',
					COLOR: '#EF4444',
				},
				[OrderPaymentStatusEnum.CANCELLED]: {
					TITLE: 'Отменен',
					COLOR: '#6B7280',
				},
			},
		},
	}

	// FORMS
	FORMS = {
		USER: {
			NAME: 'Иванов Иван',
			PHONE: '+7 (999) 123-45-67',
			PASSWORD: '••••••••',
		},
		ORDER: {
			CUSTOMER_NAME: 'Иванов Иван',
			CUSTOMER_PHONE: '+7 (999) 123-45-67',
			CUSTOMER_EMAIL: 'ivanov@example.com',
			RECIPIENT_NAME: 'Петров Петр',
			RECIPIENT_PHONE: '+7 (999) 765-43-21',
			SHIPPING_ADDRESS: 'ул. Пушкина, д. 10, кв. 5',
			COMMENT: 'Позвоните перед доставкой',
		},
		CATEGORY: {
			TITLE: 'Цветы',
		},
		PRODUCT: {
			TITLE: 'Букет роз',
			DESCRIPTION: 'Красивый букет из свежих роз',
			PRICE: '3200',
			COUNT: '10',
			CATEGORY_ID: 'Букет невесты',
		},
	}
}

export const CONFIG = new Config()
