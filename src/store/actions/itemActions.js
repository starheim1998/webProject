

/**
 * Sets item list to the updated item list.
 * @param items
 * @returns {(function(*): void)|*}
 */
export function setItems(items){
    return function(dispatch){
        dispatch({
            type: "SET_ITEMS",
            items: items
        })
    }
}
