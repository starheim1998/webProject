import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../store/actions/userActions";
import {useHistory} from "react-router";
import Orders from "../../components/Orders/Orders";
import "./AccountPage.css";


export default function AccountPage() {
    const dispatch = useDispatch();
    const history = useHistory()
    const loggedInUser = useSelector(state => state.registerReducer.currentUser);

    function logout(){
        localStorage.removeItem("token");
        history.push("/")
    }

    return (
        <div>
            <h1>{loggedInUser.name}</h1>
            <div className={"aboveOrders"}>
            <h3>Order:</h3>
            <h3>Total sum:</h3>
            <h3>Date:</h3>
            <h3>Status:</h3>
            </div>
            <Orders items={"test"} date={"20-02-12"} status={"Sent"} sum={1230}/>
            <button onClick={logout}>LOGOUT</button>
        </div>
    )
}

function authHeader() {
    const user = JSON.parse(localStorage.getItem('token'));

    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken };
    } else {
        return {};
    }
}

// https://bezkoder.com/react-hooks-redux-login-registration-example/
//https://github.com/bezkoder/react-redux-hooks-jwt-auth/blob/master/src/reducers/auth.js