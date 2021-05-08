import {API_URL} from "../../config";

export function setCartItem(userId, itemId){
    console.log("userID=", userId);
    console.log("itemID=", itemId);
    return (dispatch) => {
        return fetch(`${API_URL}/order/add/${userId}/${itemId}`, {
            method: "POST",
            headers: {'Content-type':'application/json'},
            })
            .then(
                dispatch({
                    type: "SET_CART_ITEM",
                    cartItems: itemId
                })
            );
    }
}

export function getCartItems(userId){
    return (dispatch) => {
         fetch(API_URL + "/order/cart/" + userId)
        .then((response) => response.json())
        .then((json) => {
            console.log("JSON", (json))
            if(json.message){ //if error
                alert("Failed to get cart items")
            } else {
               ((json.items.forEach((item) =>{
                        dispatch(fetchCartItems(item.id))
                    }
                )))}
        })
        .catch(function (err) {
            alert("ERROR: " + err);
        })
    }
}

export const fetchCartItems = (item) => ({
    type: "SET_CART_ITEM",
    cartItems: item
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