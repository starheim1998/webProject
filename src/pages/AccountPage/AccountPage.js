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
                    renderOrder(order)
                )
            })
        )
    }

    const renderOrder = (order) => {
        // orderState.map(order)
        console.log(order.items.name)
        return(
            <div key={order.id}>
                <Order items={order.items}/>
            </div>
        )
    }

    return (
        <div className={""}>
            <h1>{loggedInUser.name}</h1>
            <div className={"aboveOrders"}>
            <h3>Items:</h3>
            <h3>Quantity:</h3>
            <h3>Total sum:</h3>
            <h3>Date:</h3>
            <h3>Status:</h3>
            </div>
            {addBody()}
            <button onClick={logout}>LOGOUT</button>
        </div>
    )
}

// https://bezkoder.com/react-hooks-redux-login-registration-example/
// https://github.com/bezkoder/react-redux-hooks-jwt-auth/blob/master/src/reducers/auth.js