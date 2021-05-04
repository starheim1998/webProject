
import {API_URL} from "../../config";
import {loginUser} from "./registerUserAction";

export const loginUserAction = loginUserInfo => {
    return dispatch => {
        return fetch(API_URL + "/authenticate/login", {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(loginUserInfo)
        })
            .then(resp => resp.json())
            .then(json => {
                if (json.message) {
                    alert("Login failed - invalid username or password.")
                    console.log(json.message)
                } else {
                    localStorage.setItem("token", JSON.stringify(json.jwt))
                    console.log("Jwt token:" + localStorage.getItem("token"));
                    dispatch(loginUser(json))
                }
            })
            .catch(function (err) {
                alert("ERROR:" + err)
            });
    }
}


// export const loginUser = userObject => ({
//     type: "LOGIN_USER",
//     payload: userObject
// })