import type { IProduct } from '@/types/product.type'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export interface ICartItem {
	product: IProduct
	quantity: number
}

interface ICartState {
	items: ICartItem[]
	addItem: (product: IProduct) => void
	increment: (productId: string) => void
	decrement: (productId: string) => void
	clear: () => void
}

export const useCartStore = create<ICartState>()(
	persist(
		set => ({
			items: [],

			addItem: (product: IProduct) =>
				set(state => {
					const exists = state.items.some(i => i.product.id === product.id)

					if (exists) return state

					return {
						items: [...state.items, { product, quantity: 1 }],
					}
				}),

			increment: productId =>
				set(state => ({
					items: state.items.map(i =>
						i.product.id === productId ? { ...i, quantity: i.quantity + 1 } : i,
					),
				})),

			decrement: productId =>
				set(state => ({
					items: state.items
						.map(i =>
							i.product.id === productId
								? { ...i, quantity: i.quantity - 1 }
								: i,
						)
						.filter(i => i.quantity > 0),
				})),

			clear: () => set({ items: [] }),
		}),
		{
			name: 'cart',
			storage: createJSONStorage(() => localStorage),
		},
	),
)
