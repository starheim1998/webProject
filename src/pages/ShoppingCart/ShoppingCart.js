import {useDispatch, useSelector} from "react-redux";
import Checkout from "../../components/Modal/Checkout/Checkout";
import {useEffect, useState} from "react";

import "./ShoppingCart.css"
import {deleteCartItem, getCartItems} from "../../store/actions/cartActions";
import {useHistory} from "react-router";

export default function ShoppingCart() {
    const [checkoutOpen, setCheckoutOpen] = useState(false);
    const itemsState = useSelector((state) => state.itemReducer.items);
    const cartState = useSelector((state) => state.cartReducer.cartItems);
    const currentUserState = useSelector((state) => state.accountReducer.currentUser);
    const dispatch = useDispatch();
    const history = useHistory();
    // template account for testing


    const deleteHandler = (item) => {
        dispatch(deleteCartItem(currentUserState.id, item.id))
    }

    useEffect(() => {
        dispatch(getCartItems(currentUserState.id))
    }, [])


    const getItem = (cartItem) => {
        console.log(itemsState)
        console.log(itemsState.find((item) => item.id === cartItem))
        return itemsState.find((item) => item.id === cartItem);
    }


    /**
     * Add body to shopping cart. First if: it is only accessible by a logged in user.
     * We count each item incoming from the database and increment them to the quantity field
     * in our shopping cart <div>.
     *
     * @returns {JSX.Element|*[]} Renders the JSX of the shopping cart page with the items of the user,
     * the quantity of equal items and an option to checkout.
     */

    const addBody = () => {
        if (localStorage.getItem("token") === null) {
            history.push("/");
        } else if (cartState.length === 0) {
            return <p>The shopping cart is empty </p>
        } else {
            const counts = [];
            cartState.forEach(function (itemId) {
                counts[itemId] = (counts[itemId] || 0) + 1;
            });
            const uniqueCart = new Set(cartState)
            let uniqueList = [...uniqueCart]
            return (
                uniqueList.map((cartItem) =>
                    renderItem(getItem(cartItem), counts[cartItem]))
            )
        }
    }

    const renderItem = (item, quantity) => {
        console.log("ITEM", item)
        console.log("QUANITYT", quantity)
        return (
            <ul className={"cart_item_container"} key={item.id}>
                <div className={"cart_img_container"}>
                    <img src={item.img} alt={item.name}/>
                </div>
                <ul className={"cart_body_container"}>
                    <li>{item.name}</li>
                    <li>Size: {item.size}</li>
                    <li>Color: {item.colors}</li>
                </ul>
                <li>Price: {item.price} kr</li>
                <li>Quantity: {quantity}</li>
                <li>Total: {item.price * quantity} kr</li>

                <li className={"delete_button_container"}>
                    <button onClick={() => deleteHandler(item)}> DELETE</button>
                </li>
            </ul>
        )
    }

    return (
        <div className={"cart_main_container"}>
            <h3>Shopping cart</h3>
            {addBody()}

            <button onClick={() => {
                setCheckoutOpen(true)
                history.replace("/ShoppingCart/ShoppingCart/Checkout");
            }
            }>Checkout!
            </button>
            <Checkout open={checkoutOpen}
                      onClose={() => {
                          setCheckoutOpen(false)
                          history.push("/ShoppingCart/ShoppingCart/")
                      }}
                      redirect={() => console.log("GO BACK")}/>
        </div>
    )
}