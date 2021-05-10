import Hero from "../../components/Hero/Hero";
import "./Home.css";
import CardList from "../../components/CardList/CardList";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getItems} from "../../store/actions/itemActions";

/**
 * Home menu. We hardcoded the items for sale / trending categories as we did not see the implementation of it to
 * further develop our skills more than we already know / have .
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home(){
    const itemState = useSelector((state) => state.itemReducer.items);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getItems());
    },[])

    const getTrendingItems = () => {
        return itemState.filter((item) => item.id === 1
        || item.id === 2 || item.id === 3)
    }


    return(
        <div>
            <Hero/>
            <div className={"home-container"}>
                <h2>Trending right now...</h2>
                <div className={"contentBox"}>
                    <p>Items trending!</p>
                    <CardList cards={getTrendingItems()}/>
                </div>
                <h2>For sale ..</h2>
                <div className={"contentBox"}>
                    <p>Items for sale!</p>
                    {/*<CardList cards={getOnSaleItems()}/>*/}
                </div>
            </div>
        </div>
    )
}