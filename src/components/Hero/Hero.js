import React from 'react';
import heroImage from "./../../img/hero-test.jpg"
import "./Hero.css";
import {useHistory} from "react-router";

export default function Hero() {
    /**
     * TESTING REDIRECT
     * */
    const history = useHistory()
    function redirect(){
        history.push("/item/0/");
    }
/***/
    return (
        <div className={"hero-container"}>
            <img src={heroImage} alt={"hero"}/>
            <div className={"heroNOTphoto"}>
                <h1>NEVER SEEN BEFORE SALE</h1>
                <p>We are throwing a BIG sale this weekend for our brand new shoes!</p>
                <div className={"hero-button"}>
                    <button onClick={redirect}>SHOP NOW</button>
                </div>
            </div>
        </div>
    )
}