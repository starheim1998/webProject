const initialState = {
    items: []
}
/**
 * Item reducer - stores the items fetched from the API
 */
export default function itemReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_ITEMS":
            return {
                ...state,
                items: action.items
            };
        default:
            return state;
    }
}
