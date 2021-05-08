
const initialState = {
    orders: []
}

export default function orderReducer(state = initialState, action){
    switch (action.type){
        case "FETCH_ORDERS":
            console.log(state.orders)
            return {
                orderItems: action.payload
            }
        default:
            return state
    }
}