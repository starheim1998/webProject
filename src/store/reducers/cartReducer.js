const initialState = {
    cartItems: []
}

/**
 *  Cart reducer - Used to store the cart items of a logged in user
 */
export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        /**
         * Fetches items from API to the state
         */
        case "FETCH_CART_ITEMS":
            return {
                cartItems: action.payload
            }

        /**
         * Adds additional cart items to the current state
         */
        case "SET_CART_ITEM":
            return {
                cartItems: [...state.cartItems, action.payload]
            }
        /**
         * Delete cart items matching the given ID
         */
        case "DELETE_CART_ITEM":
            return {
                ...state,
                cartItems: state.cartItems.filter((cartItem) => cartItem !== action.payload)
            }
        /**
         * Empties the cart state
         */
        case "EMPTY_CART":
            return {
                cartItems: []
            }
        default:
            return state;
    }
}

