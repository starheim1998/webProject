import {API_URL} from "../../config";
import {AuthHeader} from "../../auth/AuthHeader";

/**
 * Adds given item to cart of user with userId provided. Authorized using JWT.
 * @param userId of user involved.
 * @param itemId of item to be added.
 */
export function setCartItem(userId, itemId) {
    return (dispatch) => {
         fetch(`${API_URL}/order/add/${userId}/${itemId}`, {
            method: "POST",
            headers: {
                'Authorization': AuthHeader(true).get('Authorization'),
                'Content-type': AuthHeader(true).get('Content-type')
            }
        })
            .then(
                dispatch({
                    type: "SET_CART_ITEM",
                    payload: itemId
                })
            );
    }
}

/**
 * Fetch all cart items of given user and place in redux store.
 * @param userId of user's items to be fetched.
 * @return {(function(*): void)|*} cart items.
 */
export function getCartItems(userId) {
    return (dispatch) => {
        fetch(API_URL + "/order/cart/" + userId, {
            headers: {'Authorization': AuthHeader(false).get('Authorization')}
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.message) { //if error
                    console.log("Failed to get cart items")
                } else {
                    let items = []
                    json.items.forEach((item) => {
                        items.push(item.id)
                    })
                    console.log(items)
                    dispatch({
                        type: "FETCH_CART_ITEMS",
                        payload: items
                    })
                }
            })
            .catch(function (err) {
                alert("ERROR:" + err);
            })
    }
}

/**
 * Deletes item from cart in redux & database.
 * @param userId used to identify correct cart
 * @param itemId used to identify correct item
 */
export function deleteCartItem(userId, itemId) {
    return dispatch => {
        return fetch(`${API_URL}/order/cart/delete/${userId}/${itemId}`, {
            method: "PUT",
            headers: {
                'Authorization': AuthHeader(true).get('Authorization'),
                'Content-type': AuthHeader(true).get('Content-type')
            }
        })
            .then(dispatch({
                type: "DELETE_CART_ITEM",
                payload: itemId
            }));
    }
}

/**
 * Checkout cart - empties cart and creates order of the cart items.
 * @param userId of the cart to be checked out.
 */
export function checkOutCart(userId) {
    return dispatch => {
        return fetch(`${API_URL}/order/checkout/${userId}/`, {
            method: "PUT",
            headers: {
                'Authorization': AuthHeader(true).get('Authorization'),
                'Content-type': AuthHeader(true).get('Content-type')
            }
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

