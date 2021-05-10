import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCartItems, setCartItem} from "../../store/actions/cartActions";
import {getItems} from "../../store/actions/itemActions";
import "./Item.css"

export default function Item(){
    const currentUserState = useSelector((state) => state.accountReducer.currentUser);
    const loggedInState = useSelector((state) => state.accountReducer.isLoggedIn);
    const itemsState = useSelector((state) => state.itemReducer.items)
    const cartState = useSelector((state) => state.cartReducer.cartItems)

    const dispatch = useDispatch();
    let {id} = useParams();

    // Code adapted from:
    // https://github.com/NTNU-SysDev/react-demo-shop-with-api/tree/master/webapp/src

    //TODO: fix double render issue - loop?
    useEffect(()=> {
        dispatch(getItems())
    },[id])

    const foundItem = () => {
        return itemsState.find((item) => item.id === parseInt(id))
    }

    const handleAddToCart = (itemId) => {{
        }
        if (loggedInState) {
            dispatch(setCartItem(currentUserState.id, itemId))
            alert(`Added ${foundItem().name} to the shopping cart`);
            console.log("foundItem", foundItem());
            console.log("cartstate", cartState);
        } else {
            alert('You must be logged in to add items to cart!')
        }
    }

    return foundItem() ?(
        <div className={"item_wrapper"}>
            <div className={"img_wrapper"}>
                <img src={foundItem().img} alt={foundItem().name}/>
            </div>
            <div className={"body_wrapper"}>
                <div className={"body_header"}>
                    <h1>{foundItem().name}</h1>
                    <h2>{foundItem().description}</h2>
                </div>
                <div className={"body_desc"}>
                    <h3>Price: {foundItem().price} kr</h3>
                    <h3>Color: {foundItem().colors} </h3>
                    <h3>Size: {foundItem().size}</h3>
                    <h3>Details: {foundItem().details} </h3>
                </div>
                <div className={"body_button_div"}>
                    <button id="addToCartBtn" type="submit" onClick={() => handleAddToCart(foundItem().id)}> Add to cart </button>
                </div>
            </div>
        </div>
    ): null
}