/**
 * Initial state of the items.
 * @type {{items: *[]}}
 */
const initialState = {
    items: []
}

/**
 * Data reducer for the actions... ???? TODO
 * @param state
 * @param action
 * @returns {{items: *}|{items: *[]}}
 */
export default function itemReducer(state = initialState, action){
    switch(action.type){
        case "SET_ITEMS":
            return{
                ...state,
                items: action.items
            }
        default:
            return state;
    }
}