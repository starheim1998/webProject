
export function toggleNavBar(){
    return function(dispatch){
        dispatch({
            type: "TOGGLE_NAVBAR"
        })
    }
}