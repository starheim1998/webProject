

export function setCartItem(cartItem){
    return function (dispatch){
        dispatch({
            type: "SET_CART_ITEM",
            cartItem: cartItem
        })
    }
}

export function deleteCartItem(id){
    return function (dispatch){
        dispatch({
            type: "DELETE_CART_ITEM",
            payload: id
        })
    }
}

export function updateQuantity(id, quantity){
    return function (dispatch){
        dispatch({
            type: "UPDATE_QUANTITY",
            payload: {"id": id, "quantity": quantity}
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