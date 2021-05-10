import React, {useEffect} from 'react';
import "./Hero.css";
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getItems} from "../../store/actions/itemActions";

export default function Hero() {
    const itemState = useSelector((state) => state.itemReducer.items);
    const dispatch = useDispatch();
    const history = useHistory()

    function redirect(){history.push("/item/15/");}

    useEffect(()=> {dispatch(getItems());},[])

    const getHeroImage = () => {return itemState.find(item => item.id === 15)}

    return getHeroImage() ? (
        <div className={"hero-container"}>
            <img src={getHeroImage().img} alt={"hero"}/>
            <div className={"heroNOTphoto"}>
                <h1>NEVER SEEN BEFORE SALE</h1>
                <p>We are throwing a BIG sale this weekend for our brand new shoes!</p>
                    <button onClick={redirect}>SHOP NOW</button>
            </div>
        </div>
    ):null
}