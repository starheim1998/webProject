import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCartItems, setCartItem} from "../../store/actions/cartActions";
import {getItems} from "../../store/actions/itemActions";

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
        <div className={"item-wrapper"}>
            <div className={"left-item"}>
                <img src={foundItem().img} alt={foundItem().name}/>
            </div>
            <div className={"right-item"}>
                <h2>{foundItem().name}</h2>
                <h4>{foundItem().description}</h4>
                <h4>{foundItem().price}</h4>
                <div>SIZE DROPDOWN</div>
                <div>COLOR DROPDOWN</div>
                <h4>Product details:{foundItem().details}</h4>
            </div>
            <button type="submit" onClick={() => handleAddToCart(foundItem().id)}> Add to cart </button>
        </div>
    ): null
}