import SearchBar from "../SearchBar/SearchBar";
import {Link} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./Header.css";
import cart from "./../../img/cart.png";
import {useState} from "react";
import Login from "../Modal/Login/Login";
import React from 'react';

export default function Header(){
    {/*Keeping track of modal's state.*/}
    const [isOpen, setIsOpen] = useState(false);


    return(
        <div className="header_container">
            {/*first row of the header*/}
            <div className="first_row_header">
                <Link to="/"> <h3>Home</h3> </Link>

                <SearchBar/>

                {/*Modal for Login/Register*/}
                <button onClick={() => setIsOpen(true)}>Login | Register</button>
                <Login open={isOpen} onClose={()=>setIsOpen(false)}/>

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