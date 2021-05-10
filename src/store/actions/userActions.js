import {API_URL} from "../../config";
import {AuthHeader} from "../../auth/AuthHeader";

/**
 * Register user
 */
export const registerUserAction = newAccount => {
     fetch(API_URL + "/registration", {
        method: "POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(newAccount)
    })
         .then(response => response.json())
         .then(boolean => {
             if(boolean){
                 alert("Successfully registered user!")
             } else {
                 alert("Your email is already in use!")
             }
         })
        .catch(function (err) {
            alert("ERROR:" + err)
        });
}

/**
 * Login user
 * @param loginUserInfo
 * @returns {function(*): Promise<any>}
 */
export const loginUserAction = (loginUserInfo) => {
    return dispatch => {
        return fetch(API_URL + "/authenticate/login", {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(loginUserInfo)
        })
            .then((resp) => resp.json())
            .then((json) => {
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
                console.log("ERROR:" + err)
            });
    }
}

/**
 * Get user
 * @returns {(function(*): (Promise<void>|undefined))|*}
 */
export const getUser = () => {
    return dispatch => {
        const token = localStorage.getItem("token");
        if (token) {
            return fetch(API_URL + "/authenticate/getUser", {
                method: "POST",
                headers: {
                    'Authorization': AuthHeader(true).get('Authorization'),
                    'Content-type': AuthHeader(true).get('Content-type')
                },
                body: JSON.parse(token)
            })
                .then(response => response.json())
                .then(json => {
                    console.log(JSON.stringify(json))
                    if (json.message) {
                        console.log("'get user' error")
                    } else {
                        dispatch(loginUser(json))
                    }
                })
        }
    }
}


/**
 * Redux LOGIN
 * @param userObject
 * @returns {{payload, type: string}}
 */
export const loginUser = userObject => ({
    type: "LOGIN_USER",
    payload: userObject
})

/**
 * Logout user
 */
export const logoutUser = () => (dispatch) => {
    localStorage.removeItem("token");
    dispatch({
        type: "LOGOUT_USER",
    });
};


