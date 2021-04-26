

export function setItems(item){
    return function(dispatch){
        dispatch({
            type: "SET_ITEMS",
            items: item
        })
    }
}
