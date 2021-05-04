import {API_URL} from "../../config";
import {loginUser} from "./registerUserAction";

export const getUserAction=()=>{
    return dispatch => {
        const token = localStorage.getItem("token");
        if(token){
            return fetch(API_URL + "/authenticate/user", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response=>response.json())
                .then(json => {
                    if(json.message){
                        console.log("get user error")
                        localStorage.removeItem("token");
                    }else {
                        dispatch(loginUser(json))
                    }
                })
        }
    }
}