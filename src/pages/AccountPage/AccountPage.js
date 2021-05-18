// React
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

// Components
import Order from "../../components/Order/Order";

// Actions
import {getOrders} from "../../store/actions/orderActions";
import {logoutUser} from "../../store/actions/userActions";

// Styling
import "./AccountPage.css";


/**
 * @author Andreas Starheim Hernæs & Mathias van der Bend
 * @version v1.0
 *
 * Account page - Displays a list of orders committed by the logged in user
 */

export default function AccountPage() {
    const dispatch = useDispatch();
    const history = useHistory()
    const loggedInUser = useSelector(state => state.userReducer.currentUser);
    const orderState = useSelector((state) => state.orderReducer.orders)

    /**
     * If the user does not have a token, they are redirected to the home page
     * Else the orders of the user are fetched from the database
     */
    useEffect(() => {
        if(localStorage.getItem("token") === null){
            history.push("/");
        }
        dispatch(getOrders(loggedInUser.id))
        console.log(orderState)

    }, [dispatch])

    /**
     * Logs out the user and redirects to the home page
     */
    function logout(){
        dispatch(logoutUser())
        history.push("/")
    }

    /**
     * Adds the body of the page
     * @returns returns an Order-component for each order by the user
     */
    const addBody = () => {
        console.log(orderState)
        return(
            orderState.map((order) => {
                return(
                    <Order order={order}/>
                )
            })
        )
    }

    return (
        <div className={"accountPageWrapper"}>
            <div className={"accountPageHeader"}>
                <h2>Your orders</h2>
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