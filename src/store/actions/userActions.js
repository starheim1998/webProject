import {API_URL} from "../../config";
import {AuthHeader} from "../../auth/AuthHeader";

/**
 * Register user - sends the provided registration form to the
 * database. After submission the user will be told whether the
 * registration was a success or failure. Failure indicates a
 * taken email.
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
 * Login user - sends the provided login-information to the database,
 * if the user exists the user will be provided a token and registered
 * as a currently logged in user in the redux state.
 * @param loginUserInfo the login username and password.
 * @returns {function(*): Promise<any>} is registered as logged in
 * in the redux state.
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
 * Get user - Fetches user using the JWT token stored in localStorage, used to restore a previous
 * 'logged in state' if the page is refreshed or the user logs in, does not log out
 * but leaves the page for an hour, for example. He will be logged in when he returns.
 * @returns {(function(*): (Promise<void>|undefined))|*} logs the user in using user details
 * sent from the DB.
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
                        console.log("'getUser' DB-response error.")
                    } else {
                        dispatch(loginUser(json))
                    }
                })
        }
    }
}


/**
 * Login user and store his or her details in the currentUser state.
 * @param userObject user to be added to the state.
 * @returns {{payload, type: string}} user details.
 */
export const loginUser = userObject => ({
    type: "LOGIN_USER",
    payload: userObject
})

/**
 * Logout user and revoke token.
 */
export const logoutUser = () => (dispatch) => {
    localStorage.removeItem("token");
    dispatch({
        type: "LOGOUT_USER",
    });
};


