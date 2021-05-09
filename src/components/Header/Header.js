import SearchBar from "../SearchBar/SearchBar";
import {Link} from "react-router-dom";
import NavBar2 from "../NavBar/NavBar2"
import "./Header.css";
import cart from "./../../img/cart.png";
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
        if(localStorage.getItem("token") === null){
            // logoutUser()
        } else {
            dispatch(getUser())
            dispatch(getItems()) // get the users items.
            dispatch(getCartItems(loggedInUser.id))
            console.log("Logged in user OBJECT",loggedInUser)
        }
    }, [])

    const loginComponent = () => {
        if (!loggedInState) { // => loggedInState must refer to localstorage
            return (
                <>
                    {/*//Modals for Login/Register*/}
                    <button onClick={() => setLoginOpen(true)}>Login | Register</button>
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
                    <span id={"cart_number"}>{cartState.length}</span>
                </div>

            )
        }
    }

    return (
        <div className="header_container">
            {/*first row of the header*/}
            <div className="first_row_header">
                <FontAwesomeIcon icon={faStar} className={"icon star_icon"}
                                 onClick={() => history.push("/")}/>
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