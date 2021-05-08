import {API_URL} from "../../config";


export function getOrders(userId){
    return (dispatch) => {
        fetch(API_URL + "/order/" + userId)
            .then((response) => response.json())
            .then((json) => {
                if(json.message) {
                    alert("Failed to fetch orders")
                } else {
                    console.log(json)
                    let orders = []
                    json.forEach((item) => {
                        orders.push(item)
                    })
                    console.log(orders)
                    dispatch({
                        type: "FETCH_ORDERS",
                        payload: orders
                    })
                }
            })
            .catch(function (err){
                alert("ERROR: " + err)
        })
    }
}
