
const initialState = {
    cartItems: []
}

export default function cartReducer(state = initialState, action){
    switch (action.type){
        case "FETCH_CART":
            return {
                ...state,
                cartItems: action.cartItems
            }

        case "SET_CART_ITEM":
            return {
                ...state,
                cartItems: action.cartItems
            }
        case "DELETE_CART_ITEM":
            return {
                ...state,
                cartItems: state.cartItems.filter((cartItem) => cartItem.itemId !== action.payload)
            }
        case "EMPTY_CART":
            return {
                cartItems: []
            }
        default:
            return state;
    }
}

