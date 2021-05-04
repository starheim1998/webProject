import {useDispatch, useSelector} from "react-redux";
import Checkout from "../../components/Modal/Checkout/Checkout";
import {useEffect, useState} from "react";

import "./ShoppingCart.css"
import {deleteCartItem, deleteOneItem, setCartItem, updateQuantity} from "../../store/actions/cartActions";
import {useHistory} from "react-router";
import {API_URL} from "../../config";
import {loginUser} from "../../store/actions/registerUserAction";

export default function ShoppingCart(){
    const [checkoutOpen, setCheckoutOpen] = useState(false);
    const itemsState = useSelector((state) => state.itemReducer.items);
    const cartState = useSelector((state) => state.cartReducer.cartItems);
    const dispatch = useDispatch();
    const history = useHistory();
    // template account for testing


    const deleteHandler = (cartItem) => {
        dispatch(deleteCartItem(cartItem.itemId))
    }

    function loadItems(){
        fetch(API_URL + "/cart")
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                dispatch(setCartItem(json));
            })
            .catch(function (err) {
                alert("ERROR: " + err);
            })
        console.log("ltest");
    }

    useEffect(() => {
        loadItems();
    },[dispatch])


    const getItem = (cartItem) => {
        return itemsState.find((item) => item.id === cartItem.itemId);
    }

   const handleQuantityChange = (cartItem, event) => {
        const updatedValue = event.target.value;
        dispatch((updateQuantity(cartItem.itemId, updatedValue)));
        console.log(cartItem.quantity);
   }

    const renderItem = (cartItem) => {
        const item = getItem(cartItem);
        return (
            <div className={"cart_item_container"} key={item.id}>
                <div className={"cart_img_container"}>
                    <img src={item.img} alt={item.name}/>
                </div>
                <div className={"cart_body_container"}>
                    <p>{item.name}</p>
                    <p>Size: {item.size}</p>
                    <p>Color: {item.color}</p>
                </div>
                <div>
                    <p>Price: {item.price} kr</p>
                </div>
                <div>
                    <p>Total: {(cartItem.quantity)*(item.price)}kr</p>

                </div>
                <div className={"amount_container"}>
                    Amount:
                    <input defaultValue={cartItem.quantity}
                           onChange={(e) => handleQuantityChange(cartItem, e)}
                           type="number" min={1} name={cartItem.quantity}/>

                </div>
                <div className={"delete_button_container"}>
                    <button onClick={() => deleteHandler(cartItem)}> DELETE</button>
                </div>
            </div>
           )
    }



    const addBody = () => {
        if(cartState.length === 0){
            return <p>The shopping cart is empty </p>
        } else {
            return (
                cartState.map((cartItem) =>
                renderItem(cartItem)
                ))
           }}

    return (
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