import {API_URL} from "../../config";
import {AuthHeader} from "../../auth/AuthHeader";

/**
 * Fetches orders of given user using her or his userID, and place them in the redux store. Authorized using JWT.
 * @param userId id of user wanting his/her orders.
 * @return {(function(*): void)|*} orders.
 */
export function getOrders(userId) {
    return (dispatch) => {
        fetch(API_URL + "/order/" + userId, {
            headers: {'Authorization': AuthHeader(false).get('Authorization')}
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.message) {
                    console.log("Failed to fetch orders")
                } else {
                    console.log("response get orders: ", json)
                    let orders = []
                    json.forEach((item) => {
                        orders.push(item)
                    })
                    console.log("all orders: ", orders)
                    dispatch({
                        type: "FETCH_ORDERS",
                        payload: orders
                    })
                }
            })
            .catch(function (err) {
                alert("ERROR: get orders error:  " + err)
            })
    }
}
