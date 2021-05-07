import {API_URL} from "../../config";
import {useSelector} from "react-redux";

export function setCartItem(userId, itemId){
    console.log("userID=", userId);
    console.log("itemID=", itemId);
    return function (dispatch){
        return fetch(`${API_URL}/order/add/${userId}/${itemId}`, {
            method: "POST",
            headers: {'Content-type':'application/json'},
            })
            .then(
                dispatch({
                    type: "SET_CART_ITEM",
                    cartItem: itemId
                })
            );
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