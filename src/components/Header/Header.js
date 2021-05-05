import SearchBar from "../SearchBar/SearchBar";
import {Link} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./Header.css";
import cart from "./../../img/cart.png";
import React, {useState} from "react";
import Login from "../Modal/Login/Login";
import Register from "../Modal/Register/Register";
import {useSelector} from "react-redux";

export default function Header() {
    // Keeping track of modal's state.
    const [loginOpen, setLoginOpen] = useState(false);
    const [registerOpen, setRegisterOpen] = useState(false);

    //Redux logged in state to track if the user is logged in or not.
    const loggedInState = useSelector(state => state.registerReducer.isLoggedIn);
    const loggedInUser = useSelector(state => state.registerReducer.currentUser);

    const loginComponent = () => {
        if (!loggedInState) {
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
        } else if (loggedInState) {
            return (
                <Link to="/accountPage/accountPage"> {loggedInUser.name} </Link>
            )
        }
    }

    const shoppingCartButton = () => {
        if (localStorage.getItem("token")===null) {
            return (
                <>
                    <img src={cart} alt="cart link" onClick={() => {
                        setLoginOpen(true)
                        alert("You are not logged in!")
                    }}/>
                </>
            )
        } else {
            return (
                <Link to="/ShoppingCart/ShoppingCart">
                    <img src={cart} alt="cart link"/>
                </Link>
            )
        }
    }

    return (
        <div className="header_container">
            {/*first row of the header*/}
            <div className="first_row_header">
                <Link to="/"><h3>Home</h3></Link>
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