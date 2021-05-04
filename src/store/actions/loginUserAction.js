
import {API_URL} from "../../config";
import {loginUser} from "./registerUserAction";

export const loginUserAction = loginUserInfo => {
    return dispatch => {
        return fetch(API_URL + "/authenticate/login", {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({loginUserInfo})
        })
            .then(resp => resp.json())
            .then(json => {
                if (json.message) {
                    console.log(json.message)
                } else if (json.accessToken) {
                    console.log(json.accessToken)
                    localStorage.setItem("token", json.accessToken)
                    dispatch(loginUser(json.user))
                }
            })
            .catch(function (err) {
                alert("ERROR:" + err)
            });
    }
}
