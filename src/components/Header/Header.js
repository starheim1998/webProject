//Components
import SearchBar from "../SearchBar/SearchBar";
import NavBar2 from "../NavBar/NavBar2"
import Login from "../Modal/Login/Login";
import Register from "../Modal/Register/Register";

//React
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import React, {useEffect, useState} from "react";

//Redux Actions
import {getUser} from "../../store/actions/userActions";
import {getCartItems} from "../../store/actions/cartActions";
import {getItems} from "../../store/actions/itemActions";
import {getOrders} from "../../store/actions/orderActions";

//Styling
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart, faStar, faUser} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

export default function Header() {
    // Keeping track of modal's state.
    const [loginOpen, setLoginOpen] = useState(false);
    const [registerOpen, setRegisterOpen] = useState(false);

    const history = useHistory();
    const dispatch = useDispatch();
    const loggedInUser = useSelector(state => state.accountReducer.currentUser);
    const cartState = useSelector((state) => state.cartReducer.cartItems);

    //Logs in user if he/she has a token
    useEffect(() => {
        dispatch(getItems())
        if(localStorage.getItem("token") === null){
            // logoutUser()
        } else {
            dispatch(getUser())
        }
    }, [])

    //If the user is successfully logged in the cart items and orders will be loaded.
    useEffect(() => {
        if(localStorage.getItem("token") !== null){
            dispatch(getCartItems(loggedInUser.id))
            dispatch(getOrders(loggedInUser.id))
        }
    },[loggedInUser])


    /**
     * Counts the amount of items in your shopping cart and displays it in the header.
     * @returns {number} of items in the shopping cart.
     */
    const getCartCounter = () => {
        let counter = 0
        cartState.forEach(() => counter++ )
        return counter
    }

    /**
     * If the users localStorage is empty we know he/she is not logged in and will provide an option to login or register.
     * If the user has a valid token in localStorage the user will be logged in automatically by the dispatch(getUser())
     * call done in the previous (first)useEffect.
     */
    const loginComponent = () => {
        if (localStorage.getItem("token") === null) { // => loggedInState must refer to localstorage
            return (
                <>
                    {/*//Modals for Login/Register*/}
                    <button onClick={() => setLoginOpen(true)} className={"headerLoginRegisterButton"}>Login | Register</button>
                    <Login open={loginOpen} onClose={() => setLoginOpen(false)} redirect={() => {
                        setLoginOpen(false);
                        setRegisterOpen(true);
                    }}/>
                    <Register onClose={() => setRegisterOpen(false)}
                              open={registerOpen}
                              redirect={() => {
                                  setLoginOpen(true);
                                  setRegisterOpen(false);
                              }}/>
                </>
            )
        } else {
            return (
                <div onClick={() => goToAccountPage()} className={"user_wrapper"}>
                    <FontAwesomeIcon className={"icon user_icon"} icon={faUser}/>
                    <span>{loggedInUser.name}</span>
                </div>
            )
        }
    }

    const goToAccountPage = () => {
        history.push("/accountPage/accountPage")
    }

    /**
     * Similar to the loginComponent, if the user has no token he/she will be redirected to login
     * when trying to access the shopping cart. If he is logged in he/she will be redirected to his cart.
     * @returns {JSX.Element}
     */
    const shoppingCartButton = () => {
        if (localStorage.getItem("token")===null) {
            return (
                <FontAwesomeIcon  className={"icon cart_icon"} icon={faShoppingCart} onClick={() => {
                    setLoginOpen(true)
                }}/>
            )
        } else {
            return (
                <div className={"cart_div"}>
                    <FontAwesomeIcon  className={"icon cart_icon"} icon={faShoppingCart} onClick={() => {
                        history.push("/shoppingCart/shoppingCart")
                    }}/>
                    <span id={"cart_number"}>{getCartCounter()}</span>
                </div>

            )
        }
    }

    return (
        <div className="header_container">
            {/*first row of the header*/}
            <div className="first_row_header">
                <div className={"titleAndIcon"} onClick={() => history.push("/")}>
                    <FontAwesomeIcon icon={faStar} className={"icon star_icon"}/>
                    <h1>Star</h1>
                </div >
                <SearchBar/>
                {loginComponent()}
                {shoppingCartButton()}
            </div>
            {/*navbar row*/}
            <div className="navbar_container">
                <NavBar2/>
            </div>
        </div>
    )
}