import React from 'react';
import heroImage from "./../../img/hero-test.jpg"
import "./Hero.css";

export default function Hero() {
    return (
        <div className={"hero-container"}>
            <img src={heroImage} alt={"hero image"}/>
            <div className={"heroNOTphoto"}>
                <h1>NEVER SEEN BEFORE SALE</h1>
                <p>We are throwing a BIG sale this weekend for our brand new shoes!</p>
                <div className={"hero-button"}>
                    <button>SHOP NOW</button>
                </div>
            </div>
        </div>
    )
}