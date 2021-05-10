//React
import React from 'react';
//Components
import Modal from "../Modal";
//Redux
import {useDispatch, useSelector} from "react-redux";
//Actions
import {checkOutCart} from "../../../store/actions/cartActions";


/**
 * Checkout modal component - simulates a user transaction, empties the shopping cart after successful checkout,
 * sending the checkout items to an "order list".
 * @param reDirect redirects to register modal.
 * @param open useState in Header.js to indicate if the modal is open or not.
 * @param onClose closes the modal.
 * @return {JSX.Element|null} Checkout modal
 */
export default function Checkout({open, onClose, redirect}) {
    const shoppingCartItems = useSelector(state => state.cartReducer.cartItems);
    const dispatch = useDispatch();
    const currentUserState = useSelector((state) => state.accountReducer.currentUser);

    if (!open) return null /*Do nothing if not open*/

    function handleCheckout(e) {
        e.preventDefault();
        if (shoppingCartItems.length === 0) {
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