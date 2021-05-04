
const initialState = {
    isLoggedIn: false,
    currentUser: {}
}

export default function registerReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                isLoggedIn: true,
                currentUser: action.payload
            }
        case 'LOGOUT_USER':
            return {
                ...state,
                isLoggedIn: false,
                currentUser: {}
            }
        default:
            return state;
    }
}