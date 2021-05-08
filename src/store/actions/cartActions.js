import {API_URL} from "../../config";

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

export function getCartItems(userId){
    return function (dispatch){
        return fetch(API_URL + "/order/cart/" + userId)
        .then((response) => response.json())
        .then((json) => {
            console.log("JSON", (json))
            if(json.message){ //if error
                alert("You are not logged in!")
            } else {
                dispatch(fetchCartItems(json))
                dispatch(setCartItem(userId, json.items.id));
            }
        })
        .catch(function (err) {
            alert("ERROR: " + err);
        })
    }
}

export const fetchCartItems = (items) => ({
    type: "FETCH_CART",
    payload: items
})



export function deleteCartItem(id){
    return function (dispatch){
        dispatch({
            type: "DELETE_CART_ITEM",
            payload: id
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