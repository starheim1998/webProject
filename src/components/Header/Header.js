import SearchBar from "../SearchBar/SearchBar";
import {Link} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./Header.css";
import cart from "./../../img/cart.png";
import {useState} from "react";
import Login from "../Modal/Login/Login";
import React from 'react';
import Register from "../Modal/Register/Register";

export default function Header(){
    // Keeping track of modal's state.
    const [loginOpen, setLoginOpen] = useState(false);
    const [registerOpen, setRegisterOpen] = useState(false);

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [name, setName] = useState("test");

    const loginComponent = () => {
        if(!isLoggedIn) {
            return (
                <>
                    {/*//Modals for Login/Register*/}
                    <button onClick={() => setLoginOpen(true)}>Login | Register</button>
                    <Login setLoggedIn = {setLoggedIn} setName = {setName} open={loginOpen} onClose={()=>setLoginOpen(false)} redirect={() =>{
                        setLoginOpen(false);
                        setRegisterOpen(true);
                    }} />
                    <Register onClose={()=>setRegisterOpen(false)}
                              open={registerOpen}
                              redirect={() =>{
                                  setLoginOpen(true);
                                  setRegisterOpen(false);
                              }}/>
                </>
            )

            } else if (isLoggedIn){
            return (
                <Link to="/accountPage/accountPage"> {name} </Link>
            )
        }
    }

    return(
        <div className="header_container">
            {/*first row of the header*/}
            <div className="first_row_header">
                <Link to="/"> <h3>Home</h3> </Link>

                <SearchBar/>
                {loginComponent()}

                <Link to="/ShoppingCart/ShoppingCart">
                    <img src={cart} alt="cart link"/>
                </Link>
            </div>
            {/*navbar row*/}
            <div className="navbar_container">
                <NavBar/>
            </div>
        </div>
    )
}