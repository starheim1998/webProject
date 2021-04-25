

export function setAccount(accounts){
    return function(dispatch){
        dispatch({
            type: "SET_ACCOUNT",
            accounts: accounts
        })
    }
}