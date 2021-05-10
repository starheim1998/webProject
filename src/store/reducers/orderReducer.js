const initialState = {
    orders: []
}

/**
 * Stores the orders fetched from the database
 */

export default function orderReducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_ORDERS":
            return {
                orders: action.payload
            }
        default:
            return state
    }
}