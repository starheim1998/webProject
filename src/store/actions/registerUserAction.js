//code inspired by post : https://levelup.gitconnected.com/using-jwt-in-your-react-redux-app-for-authorization-d31be51a50d2

import {API_URL} from "../../config";

export const registerUserAction = newAccount => {
    return dispatch => {
        return fetch(API_URL + "/registration", {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({newAccount})
        })
            .then(resp => resp.json())
            .then(json => {
                if (json.message) {
                    console.log("ERROR")
                } else {
                    localStorage.setItem("token", json)
                    dispatch(loginUser(json.user))
                    console.log("Sent, token:" + json);
                }
            })
            .catch(function (err) {
                alert("ERROR:" + err)
            });
    }
}

export const loginUser = userObject => ({
    type: "LOGIN_USER",
    payload: userObject
})
