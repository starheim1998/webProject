import {API_URL} from "../../config";
import {AuthHeader} from "../../auth/AuthHeader";


export function getOrders(userId){
    return (dispatch) => {
        fetch(API_URL + "/order/" + userId , {  headers: {'Authorization':AuthHeader(false).get('Authorization')}
        })
            .then((response) => response.json())
            .then((json) => {
                if(json.message) {
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
            .catch(function (err){
                alert("ERROR: get orders error:  " + err)
        })
    }
}
