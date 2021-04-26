import {useSelector} from "react-redux";
import Checkout from "../../components/Modal/Checkout/Checkout";
import {useState} from "react";

import "./ShoppingCart.css"

export default function ShoppingCart(){
    const [checkoutOpen, setCheckoutOpen] = useState(false);
    const itemsState = useSelector((state) => state.itemReducer.items);
    const cartState = useSelector((state) => state.cartReducer.cartItems);
    // template account for testing



    return(
        <div className={"cart_main_container"}>
            <h3>Shopping cart</h3>

            {cartState.map((cartItem) =>
                <div className={"cart_item"}>
                    <p>{itemsState[cartItem].name}</p>
                    <p>{itemsState[cartItem].price}</p>

                </div>
            )}

            <button onClick={() => setCheckoutOpen(true)}>Checkout!</button>
            <Checkout open={checkoutOpen} onClose={()=>setCheckoutOpen(false)}
            redirect={() => console.log("GO BACK")}/>

        </div>
    )
}