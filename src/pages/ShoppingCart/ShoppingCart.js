import {useDispatch, useSelector} from "react-redux";
import Checkout from "../../components/Modal/Checkout/Checkout";
import {useState} from "react";

import "./ShoppingCart.css"
import {deleteCartItem} from "../../store/actions/cartActions";

export default function ShoppingCart(){
    const [checkoutOpen, setCheckoutOpen] = useState(false);
    const itemsState = useSelector((state) => state.itemReducer.items);
    const cartState = useSelector((state) => state.cartReducer.cartItems);
    const dispatch = useDispatch();
    // template account for testing

    const deleteHandler = (id) => {
        console.log(id)
        dispatch(deleteCartItem(id))
    }


    const getItem = (id) => {
        //TODO: ugly?
        return itemsState.filter((item) => item.id === id)[0]
    }

    const addBody = () => {
        if(cartState.length === 0){
            return <p>The shopping cart is empty</p>
        } else {
            return (
                cartState.map((itemID) =>
                        <div className={"cart_item_container"}>
                            <div className={"cart_img"}>
                                <img src={getItem(itemID).img} alt={getItem(itemID).name}/>
                            </div>
                            <div className={"cart_body"}>
                                <p>{getItem(itemID).name}</p>
                                <p>{getItem(itemID).price}</p>
                            </div>
                            <div className={"delete_button_container"}>
                                <button onClick={() => deleteHandler(getItem(itemID).id)}> DELETE</button>
                            </div>

                        </div>
                    ))}}

    return(
        <div className={"cart_main_container"}>
            <h3>Shopping cart</h3>

            {addBody()}

            <button onClick={() => setCheckoutOpen(true)}>Checkout!</button>
            <Checkout open={checkoutOpen} onClose={()=>setCheckoutOpen(false)}
            redirect={() => console.log("GO BACK")}/>

        </div>
    )
}