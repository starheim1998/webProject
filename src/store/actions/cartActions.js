

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

export function deleteOneItem(index){
    return function (dispatch){
        dispatch({
            type: "DELETE_ONE_ITEM",
            payload: index
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