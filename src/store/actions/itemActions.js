import {API_URL} from "../../config";

/**
 * Get items - fetches the items in the database
 * and place them in the redux state.
 */
export function getItems() {
    return (dispatch) => {
        fetch(API_URL + "/item")
            .then((response) => response.json())
            .then((json) => dispatch({
                type: "SET_ITEMS",
                items: json
            }))
            .catch(function (err) {
                alert("ERROR: " + err);
            })
    }
}
