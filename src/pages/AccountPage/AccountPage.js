import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../store/actions/userActions";
import {useHistory} from "react-router";
import Order from "../../components/Order/Order";
import "./AccountPage.css";
import {useEffect} from "react";
import {getOrders} from "../../store/actions/orderActions";

export default function AccountPage() {
    const dispatch = useDispatch();
    const history = useHistory()
    const loggedInUser = useSelector(state => state.accountReducer.currentUser);
    const orderState = useSelector((state) => state.orderReducer.orders)

    useEffect(() => {
        if(localStorage.getItem("token") === null){
            history.push("/");
        }
        dispatch(getOrders(loggedInUser.id))
        console.log(orderState)

    }, [dispatch])

    function logout(){
        dispatch(logoutUser())
        history.push("/")
    }


    const addBody = () => {
        console.log(orderState)
        return(
            orderState.map((order) => {
                // renderOrder(order)
                return(
                    <Order order={order}/>
                )
            })
        )
    }

    return (
        <div className={"accountPageWrapper"}>
            <div className={"accountPageHeader"}>
                <h1>{loggedInUser.name}</h1>
                <button style={{margin: "15px"}} onClick={logout}>LOGOUT</button>
            </div>
            <ul className={"orderHeader"}>
                <li>Items:</li>
                <li>Total sum:</li>
                <li>Date:</li>
                <li>Status:</li>
            </ul>
            {addBody()}
        </div>
    )
}

// https://bezkoder.com/react-hooks-redux-login-registration-example/
// https://github.com/bezkoder/react-redux-hooks-jwt-auth/blob/master/src/reducers/auth.js