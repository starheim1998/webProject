import {API_URL} from "../../config";
import {AuthHeader} from "../../auth/AuthHeader";

export function setCartItem(userId, itemId) {

    return (dispatch) => {
        return fetch(`${API_URL}/order/add/${userId}/${itemId}`, {
            method: "POST",
            headers: {'Authorization': AuthHeader(true).get('Authorization'),
                      'Content-type':AuthHeader(true).get('Content-type')}
        })
            .then(
                dispatch({
                    type: "SET_CART_ITEM",
                    payload: itemId
                })
            );
    }
}

export function getCartItems(userId) {
    return (dispatch) => {
        fetch(API_URL + "/order/cart/" + userId, {
            headers: {'Authorization':AuthHeader(false).get('Authorization')}
        })
            .then((response) => response.json())
            .then((json) => {
                console.log("JSON", (json))
                if (json.message) { //if error
                    console.log("Failed to get cart items")
                } else {
                    let items = []
                    json.items.forEach((item) => {
                        items.push(item.id)
                    })
                    console.log(items)
                    dispatch(fetchCartItems(items))
                }
            })
            .catch(function (err) {
                alert("ERROR: " + err);
            })
    }
}

export const fetchCartItems = items => ({
    type: "FETCH_CART_ITEMS",
    payload: items
})

export function deleteCartItem(userId, itemId) {
    return dispatch => {
        return fetch(`${API_URL}/order/cart/delete/${userId}/${itemId}`, {
            method: "DELETE",
            headers: {'Authorization': AuthHeader(true).get('Authorization'),
                'Content-type':AuthHeader(true).get('Content-type')}
        })
            .then(dispatch({
                type: "DELETE_CART_ITEM",
                payload: itemId
            }));
    }
}


export function checkOutCart(userId) {
    return dispatch => {
        return fetch(`${API_URL}/order/checkout/${userId}/`, {
            method: "PUT",
            headers: {'Authorization': AuthHeader(true).get('Authorization'),
                'Content-type':AuthHeader(true).get('Content-type')}
            })
            .then(
                dispatch({type: "EMPTY_CART"})
            )
            .catch(function (err) {
                alert("ERROR: " + err);
            }
        )
    }
}

