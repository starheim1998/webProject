
const initialState = {
    cartItems: []
}

export default function cartReducer(state = initialState, action){
    switch (action.type){
        case "SET_CART_ITEM":
            return {
                ...state,
                cartItems: action.cartItem
            }

        case "DELETE_ONE_ITEM":
            return {
                ...state,
                cartItems:[...state.cartItems.slice(0, action._payload),
                    ...state.cartItems.slice(action._payload++)]
            }

        case "DELETE_CART_ITEM":
            return {
                ...state,
                cartItems: state.cartItems.filter((id) => id !== action.payload)
            }
        case "EMPTY_CART":
            return {
                cartItems: []
            }
        default:
            return state;
    }
}

