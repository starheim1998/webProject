import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCartItem} from "../../store/actions/cartActions";
import {API_URL} from "../../config";

export default function Item(){
    const [items, setItems] = useState([])
    const [foundItem, setFoundItem] = useState([]);
    // const itemsState = useSelector((state) => state.itemReducer.items)
    const cartState = useSelector((state) => state.cartReducer.cartItems)

    const dispatch = useDispatch();
    let {id} = useParams();

    // Code adapted from:
    // https://github.com/NTNU-SysDev/react-demo-shop-with-api/tree/master/webapp/src
    function loadItems(){
        fetch(API_URL + "/item")
            .then((response) => response.json())
            .then((json) => setItems(json))
            .catch(function (err) {
                alert("ERROR: " + err);
            })
    }

    //TODO: fix double render issue - loop?
    useEffect(()=> {
        loadItems();
        const foundItem = items.find((item) => {
                return item.id === parseInt(id);
            });
        setFoundItem(foundItem);
    },[id, items])

    const handleAddToCart = (id) => {
        dispatch(setCartItem([...cartState, id]))
        alert(`Added ${foundItem.name} to the shopping cart`);
        console.log("foundItem", foundItem);
        console.log("cartstate", cartState);
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