import {API_URL} from "../../config";

/**
 * Register user
 */
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
                    createCartOnLogin(JSON.stringify(json.id))
                }
            })
            .catch(function (err) {
                alert("ERROR:" + err)
            });
    }
}

/**
 * Create an empty cart on login, if user does not have one already.
 * @param userId of the user involved.
 */
const createCartOnLogin = (userId) => {
    fetch(`${API_URL}/order/createCart/${userId}`, {
        method: "POST",
        headers: {'Content-type': 'application/json'},
    })
        .catch(function (err) {
            alert("Error:" + err)
        })
}


/**
 * Get user
 * @returns {(function(*): (Promise<void>|undefined))|*}
 */
export const getUserAction = () => {
    return dispatch => {
        const token = localStorage.getItem("token");
        if (token) {
            return fetch(API_URL + "/authenticate/user", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => response.json())
                .then(json => {
                    if (json.message) {
                        console.log("get user error")
                        localStorage.removeItem("token");
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


