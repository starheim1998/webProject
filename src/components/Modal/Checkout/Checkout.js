import React from 'react';
import './Checkout.css';
import Modal from "../Modal";
import {useSelector} from "react-redux";

export default function Checkout({open, onClose, redirect}) {
    if (!open) return null /*Do nothing if not open*/

    // const shoppingCart = useSelector(state => state.cartReducer.cartItems);
    /*TODO: Items in shopping cart is removed from the database*/

    function handleSubmit(e){
        alert("handle submit");
    }

    return(
        <Modal title={"Checkout"}
               open={open}
               onClose={onClose}
               reDirect={redirect}>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type={"text"} placeholder={"Your name here.."}/>
                <label>Address:</label>
                <input type={"text"} placeholder={"Your address here.."}/>
                <label>Email:</label>
                <input type={"text"} placeholder={"Your email here.."}/>
                <label>Card number:</label>
                <input type={"number"} placeholder={"Your card number here.."}/>
                <label>Expiration date:</label>
                <input type={"date"} placeholder={"Your expiration date here.."}/>
                <label>CVC:</label>
                <input type={"number"} placeholder={"Your CVC here.."}/>
                <input type={"submit"} value={"Checkout!"}/>
            </form>
        </Modal>
    );
}