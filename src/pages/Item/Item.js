//React
import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

//Redux
import {useDispatch, useSelector} from "react-redux";

//Actions
import {setCartItem} from "../../store/actions/cartActions";
import {getItems} from "../../store/actions/itemActions";

//Styling
import "./Item.css"

/**
 * @author Andreas Starheim Hernæs & Mathias van der Bend
 * @version v1.0
 *

/**
 * Page 'Item' - page for displaying an individual item from the database.
 */
export default function Item() {
    const currentUserState = useSelector((state) => state.userReducer.currentUser);
    const itemsState = useSelector((state) => state.itemReducer.items)
    const dispatch = useDispatch();

    //Collect the parameter ID and use it to find the item in the redux state.
    let {id} = useParams();

    //Fetch items from the database to the redux store so we can collect it.
    useEffect(() => {
        dispatch(getItems())
    }, [id])

    //Find the given item in the item state.
    const foundItem = () => {
        return itemsState.find((item) => item.id === parseInt(id))
    }

    /*** Add item to cart if user is logged in. IF user is not logged in explain to user he/she needs to be logged in to add to cart.*/
    const handleAddToCart = (itemId) => {
        if (localStorage.getItem("token") !== null) {
            dispatch(setCartItem(currentUserState.id, itemId))
            alert(`Added ${foundItem().name} to the shopping cart`);
        } else {
            alert('You must be logged in to add items to cart!')
        }
    }

    /*** The item page with the foundItem details.*/
    return foundItem() ? (
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
                    <button id="addToCartBtn" type="submit" onClick={() => handleAddToCart(foundItem().id)}> Add to
                        cart
                    </button>
                </div>
            </div>
        </div>
    ) : null
}