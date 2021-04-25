

const initialState = {
    accounts: []
}

export default function accountReducer(state = initialState, action){
    switch (action.type){
        case "SET_ACCOUNT":
            return {
                ...state,
                accounts: action.accounts
            }
        default:
            return state;
    }
}