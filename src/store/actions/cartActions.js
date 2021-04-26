

export function setCartItem(cartItem){
    return function (dispatch){
        dispatch({
            type: "SET_CART_ITEM",
            cartItem: cartItem
        })
    }
}

export function emptyCart(){
    return function (dispatch) {
        dispatch({
            type: "EMPTY_CART"
        })
    }
}