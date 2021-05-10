import SearchBar from "../SearchBar/SearchBar";
import NavBar from "../NavBar/NavBar"
import "./Header.css";
import React, {useEffect, useState} from "react";
import Login from "../Modal/Login/Login";
import Register from "../Modal/Register/Register";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {getUser} from "../../store/actions/userActions";
import {getCartItems} from "../../store/actions/cartActions";

//FontAwesome
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart, faStar, faUser} from "@fortawesome/free-solid-svg-icons";
import {getItems} from "../../store/actions/itemActions";
import {getOrders} from "../../store/actions/orderActions";

export default function Header() {
    // Keeping track of modal's state.
    const [loginOpen, setLoginOpen] = useState(false);
    const [registerOpen, setRegisterOpen] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    //Redux logged in state to track if the user is logged in or not.
    const loggedInState = useSelector(state => state.accountReducer.isLoggedIn);
    const loggedInUser = useSelector(state => state.accountReducer.currentUser);
    const cartState = useSelector((state) => state.cartReducer.cartItems);

    useEffect(() => {
        dispatch(getItems())
        if(localStorage.getItem("token") === null){
            // logoutUser()
        } else {
            dispatch(getUser())
        }
    }, [])

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
                <NavBar/>
            </div>
        </div>
    )
}