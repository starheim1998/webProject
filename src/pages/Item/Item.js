import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {initialItems} from "../../initialItems";
import {useDispatch, useSelector} from "react-redux";

import {setCartItem} from "../../store/actions/cartActions";

export default function Item(){
    // cart redux state
    const cartState = useSelector((state) => state.cartReducer.cartItems)

    const dispatch = useDispatch();
    const [item, setItem] = useState({});
    let {id} = useParams();

    useEffect(()=>{
        const foundItem = initialItems.find(
            function (item){
                return item.id === parseInt(id);
            });
        setItem(foundItem);
        },[])

    const handleAddToCart = (id) => {
        dispatch(setCartItem([...cartState, id]))
        console.log("cart: ", cartState)
    }

    return(
        <div className={"item-wrapper"}>
            <div className={"left-item"}>
                <img src={item.img} alt={item.name}/>
            </div>
            <div className={"right-item"}>
                <h2>{item.name}</h2>
                <h4>{item.description}</h4>
                <h4>{item.price}</h4>
                <div>SIZE DROPDOWN</div>
                <div>COLOR DROPDOWN</div>
                <h4>Product details:{item.details}</h4>
            </div>
            <button type="submit" onClick={() => handleAddToCart(item.id)}> Add to cart </button>
        </div>
    )
}