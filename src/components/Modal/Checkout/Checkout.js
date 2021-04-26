import React from 'react';
import './Checkout.css';
import Modal from "../Modal";
import {useDispatch, useSelector} from "react-redux";
import {emptyCart} from "../../../store/actions/cartActions";

export default function Checkout({open, onClose, redirect}) {
     const shoppingCartItems = useSelector(state => state.cartReducer.cartItems);
     const dispatch = useDispatch();

    if (!open) return null /*Do nothing if not open*/

    /*TODO: Items in shopping cart is removed from the database*/

    function handleCheckout(e){
        e.preventDefault();
        if(shoppingCartItems.length === 0){
            alert("No items in cart.");
            return null;
        }
        dispatch(emptyCart());
        console.log(shoppingCartItems);
    }

    return(
        <Modal title={"Checkout"}
               open={open}
               onClose={onClose}
               reDirect={redirect}>
            <form onSubmit={handleCheckout}>
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