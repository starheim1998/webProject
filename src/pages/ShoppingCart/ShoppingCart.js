import {useDispatch, useSelector} from "react-redux";
import Checkout from "../../components/Modal/Checkout/Checkout";
import {useEffect, useState} from "react";

import "./ShoppingCart.css"
import {deleteCartItem, fetchCartItems, getCartItems, setCartItem} from "../../store/actions/cartActions";
import {useHistory} from "react-router";
import {API_URL} from "../../config";
import {AuthHeader} from "../../auth/AuthHeader";
import {loginUser} from "../../store/actions/userActions";
import {getItems} from "../../store/actions/itemActions";

export default function ShoppingCart(){
    const [checkoutOpen, setCheckoutOpen] = useState(false);
    const itemsState = useSelector((state) => state.itemReducer.items);
    const cartState = useSelector((state) => state.cartReducer.cartItems);
    const currentUserState = useSelector((state) => state.accountReducer.currentUser);
    const dispatch = useDispatch();
    const history = useHistory();
    // template account for testing


    const deleteHandler = (item) => {
        dispatch(deleteCartItem(currentUserState, item.id))
    }

    useEffect(() => {
        dispatch(getCartItems(currentUserState.id))
    },[])


    const getItem = (cartItem) => {
        console.log(itemsState)
        console.log(cartItem)
        console.log(itemsState.find((item) => item.id === cartItem))
        return itemsState.find((item) => item.id === cartItem);
    }

   // const handleQuantityChange = (cartItem, event) => {
   //      const updatedValue = event.target.value;
   //      dispatch((updateQuantity(cartItem.itemId, updatedValue)));
   //      console.log(cartItem.quantity);
   // }

    const renderItem = (item) => {
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
                    <p>Total: kr</p>

                </div>
                <div className={"amount_container"}>
                    Amount:
                    <input type="number" min={1} />

                </div>
                <div className={"delete_button_container"}>
                    <button onClick={() => deleteHandler(item)}> DELETE</button>
                </div>
            </div>
           )
    }



    /*ONLY ACCESSIBLE FOR LOGGED IN USER*/
    const addBody = () => {
        if(localStorage.getItem("token") === null){
            history.push("/");
        }
        else if(cartState.length === 0){
            return <p>The shopping cart is empty </p>
        } else {
            console.log("cartstate", cartState);
            return (
                cartState.map((cartItem) =>
                renderItem(getItem(cartItem))
                )
            )
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