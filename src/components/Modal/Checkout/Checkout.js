import React from 'react';
import './Checkout.css';
import Modal from "../Modal";
import {useDispatch, useSelector} from "react-redux";
import {checkOutCart} from "../../../store/actions/cartActions";

export default function Checkout({open, onClose, redirect}) {
     const shoppingCartItems = useSelector(state => state.cartReducer.cartItems);
     const dispatch = useDispatch();
    const currentUserState = useSelector((state) => state.accountReducer.currentUser);

    if (!open) return null /*Do nothing if not open*/

    /*TODO: Items in shopping cart is removed from the database*/

    function handleCheckout(e){
        e.preventDefault();
        if(shoppingCartItems.length === 0){
            alert("No items in cart.");
            return null;
        }
        dispatch(checkOutCart(currentUserState.id));
        console.log(shoppingCartItems);
        onClose();
    }

    return(
        <Modal title={"Checkout"}
               open={open}
               onClose={onClose}
               reDirect={redirect}>
            <form onSubmit={handleCheckout} className={"formModal"}>
                <label>Name:</label>
                <input type={"text"} placeholder={"Your name here.."} required/>
                <label>Address:</label>
                <input type={"text"} placeholder={"Your address here.."} required/>
                <label>Email:</label>
                <input type={"text"} placeholder={"Your email here.."} required/>
                <label>Card number:</label>
                <input type={"number"} placeholder={"Your card number here.."} required/>
                <label>Expiration date:</label>
                <input type={"date"} placeholder={"Your expiration date here.."} required/>
                <label>CVC:</label>
                <input type={"number"} placeholder={"Your CVC here.."} required/>
                <input type={"submit"} value={"Checkout!"} className={"submitButton"}/>
            </form>
        </Modal>
    );
}