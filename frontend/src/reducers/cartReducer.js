import { CART_ADD_ITEM } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
	switch(action.type){
		case CART_ADD_ITEM:
			const item = action.payload

			const existItem = state.cartItems.find(c => c.product === item.product)

			if(existItem){
				return {
					...state,
					cartItems: state.cartItems.map(c => c.product === existItem.product ? item : c)
				}
			}else {
				return {
					...state,
					cartItems: [...state.cartItems, item]
				}
			}
		default:
			return state
	}
}