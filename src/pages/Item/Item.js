import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCartItem} from "../../store/actions/cartActions";

export default function Item(){
    const [item, setItem] = useState([]);
    const itemsState = useSelector((state) => state.itemReducer.items)
    const cartState = useSelector((state) => state.cartReducer.cartItems)

    const dispatch = useDispatch();

    let {id} = useParams();

    useEffect(()=> {
        const foundItem = itemsState.find((item) => {
            console.log("item: ", item, "id: ", item.id)
                return item.id === parseInt(id);
            });

        setItem(foundItem);
        console.log(foundItem);

    },[id, itemsState])

    const handleAddToCart = (id) => {
        dispatch(setCartItem([...cartState, id]))
        alert(`Added ${item.name} to the shopping cart`);
    }

    return item != null ? (
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
    ) :null
}