
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
        case "DELETE_CART_ITEM":
            return {
                ...state,
                cartItems: state.cartItem.filter((item) => item !== action.payload)
            }
        case "EMPTY_CART":
            return {
                cartItems: []
            }
        default:
            return state;
    }
}

