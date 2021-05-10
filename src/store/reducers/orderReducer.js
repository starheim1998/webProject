const initialState = {
    orders: []
}

export default function orderReducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_ORDERS":
            console.log(action.payload)
            return {
                orders: action.payload
            }
        default:
            return state
    }
}