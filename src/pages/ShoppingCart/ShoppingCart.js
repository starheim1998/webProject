import {useDispatch, useSelector} from "react-redux";
import Checkout from "../../components/Modal/Checkout/Checkout";
import {useState} from "react";

import "./ShoppingCart.css"
import {deleteCartItem} from "../../store/actions/cartActions";
import {useHistory} from "react-router";

export default function ShoppingCart(){
    const [checkoutOpen, setCheckoutOpen] = useState(false);
    const itemsState = useSelector((state) => state.itemReducer.items);
    const cartState = useSelector((state) => state.cartReducer.cartItems);
    const dispatch = useDispatch();
    const history = useHistory();
    // template account for testing

    const deleteHandler = (id) => {
        console.log(id)
        dispatch(deleteCartItem(id))
    }


    const getItem = (id) => {
        return itemsState.find((item) => item.id === id);
    }

    const getNumberOfItem = (id) => {
        let counter = 0;
        cartState.forEach((itemID) => {
            if(itemID === id){
                counter++;
            }
        })
        console.log("counter", counter)
        return counter;
    }

    const renderItem = (id) => {
        return (
            <div className={"cart_item_container"} key={getItem(id).id}>
                <div className={"cart_img_container"}>
                    <img src={getItem(id).img} alt={getItem(id).name}/>
                </div>
                <div className={"cart_body_container"}>
                    <p>{getItem(id).name}</p>
                    <p>{getItem(id).price} kr</p>
                </div>
                <div className={"amount_container"}>
                    Amount:
                    <input type="number" min={1} defaultValue={getNumberOfItem(id)}/>
                </div>
                <div className={"delete_button_container"}>
                    <button onClick={() => deleteHandler(getItem(id).id)}> DELETE</button>
                </div>
            </div>
           )
    }



    const addBody = () => {
        if(cartState.length === 0){
            return <p>The shopping cart is empty </p>
        } else {
            return (
                cartState.map((itemID) =>
                renderItem(itemID)
                ))
           }}

    return(
        <div className={"cart_main_container"}>
            <h3>Shopping cart</h3>
            {addBody()}

            <button onClick={() => {
                setCheckoutOpen(true)
                history.replace("/ShoppingCart/ShoppingCart/Checkout");
            }
            }>Checkout!</button>
            <Checkout open={checkoutOpen}
                      onClose={()=>{
                          setCheckoutOpen(false)
                          history.push("/ShoppingCart/ShoppingCart/")
                      }}
                      redirect={() => console.log("GO BACK")}/>
        </div>
    )
}