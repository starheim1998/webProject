//React
import React, {useEffect} from 'react';
import {useHistory} from "react-router";
//Redux
import {useDispatch, useSelector} from "react-redux";
//Actions
import {getItems} from "../../store/actions/itemActions";
//Styling
import "./Hero.css";

/**
 * Hero component - acts as a prominent image with information regarding the most
 * pressing or "hot" items available in the shop.
 * @returns {JSX.Element|null} the hero component.
 */
export default function Hero() {
    const itemState = useSelector((state) => state.itemReducer.items);
    const dispatch = useDispatch();
    const history = useHistory()

    function redirect() {
        history.push("/item/15/");
    }

    useEffect(() => {
        dispatch(getItems());
    }, [])

    const getHeroImage = () => {
        return itemState.find(item => item.id === 15)
    } //Find item with ID 15 in itemState

    return getHeroImage() ? (
        <div className={"hero-container"}>
            <img src={getHeroImage().img} alt={"hero"}/>
            <div className={"heroNOTphoto"}>
                <h1>NEVER SEEN BEFORE SALE</h1>
                <p>We are throwing a BIG sale this weekend for our brand new hat!</p>
                <button onClick={redirect}>SHOP NOW</button>
            </div>
        </div>
    ) : null
}