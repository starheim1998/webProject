const initialState = {
    currentUser: {}
}

/**
 * User reducer - redux reducer used to store the logged in user's account details
 * as an object.
 */
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        case 'LOGOUT_USER':
            return {
                ...state,
                currentUser: {}
            }
        default:
            return state;
    }
}