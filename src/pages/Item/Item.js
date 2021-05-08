import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchCartItems, getCartItems, setCartItem} from "../../store/actions/cartActions";
import {getItems} from "../../store/actions/itemActions";

export default function Item(){
    const currentUserState = useSelector((state) => state.accountReducer.currentUser);
    const [foundItem, setFoundItem] = useState([]);
    const itemsState = useSelector((state) => state.itemReducer.items)
    const cartState = useSelector((state) => state.cartReducer.cartItems)

    const dispatch = useDispatch();
    let {id} = useParams();

    // Code adapted from:
    // https://github.com/NTNU-SysDev/react-demo-shop-with-api/tree/master/webapp/src

    //TODO: fix double render issue - loop?
    useEffect(()=> {
        dispatch(getCartItems(currentUserState.id));
        console.log("cart", cartState);


        const foundItem = itemsState.find((item) => {
                return item.id === parseInt(id);
            });
        setFoundItem(foundItem);
    },[id])

    const handleAddToCart = (itemId) => {
        {
            console.log("userState= ", currentUserState);
            console.log("itemid", itemId);
        }
        dispatch(setCartItem(currentUserState.id, itemId))
        console.log("cartstate", cartState);
        alert(`Added ${foundItem.name} to the shopping cart`);
    }

    return foundItem != null ? (
        <div className={"item-wrapper"}>
            <div className={"left-item"}>
                <img src={foundItem.img} alt={foundItem.name}/>
            </div>
            <div className={"right-item"}>
                <h2>{foundItem.name}</h2>
                <h4>{foundItem.description}</h4>
                <h4>{foundItem.price}</h4>
                <div>SIZE DROPDOWN</div>
                <div>COLOR DROPDOWN</div>
                <h4>Product details:{foundItem.details}</h4>
            </div>
            <button type="submit" onClick={() => handleAddToCart(foundItem.id)}> Add to cart </button>
        </div>
    ) :null
}