
const initialState = {
    cartItems: []
    // cartItems: [
    //     {
    //     itemId: "",
    //     quantity: 1
    // }
    // ]
}

export default function cartReducer(state = initialState, action){
    switch (action.type){
        case "FETCH_CART_ITEMS":
            return {
                cartItems: action.payload
            }

        case "SET_CART_ITEM":
            // let newState;
            // if(state.cartItems.find((cartItem) => cartItem.itemId === action.id)){
            //     newState = [...state.cartItems]
            // } else {
            //     newState = [...state.cartItems, action.payload]
            // }
            return {
                cartItems: [...state.cartItems, action.payload]
                // cartItems: newState
            }
        case "DELETE_CART_ITEM":
            return {
                ...state,
                cartItems: state.cartItems.filter((cartItem) => cartItem !== action.payload)
            }
        case "EMPTY_CART":
            return {
                cartItems: []
            }
        default:
            return state;
    }
}

