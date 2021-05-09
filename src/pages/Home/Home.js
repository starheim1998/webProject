import Hero from "../../components/Hero/Hero";
import "./Home.css";
import CardList from "../../components/CardList/CardList";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {getItems} from "../../store/actions/itemActions";

/**
 * Home menu. We hardcoded the items for sale / trending categories as we did not see the implementation of it to
 * further develop our skills more than we already know / have .
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home(){
    const itemState = useSelector((state) => state.itemReducer.items);

    useEffect(()=> {
        getItems();
    },[])

    const getTrendingItems = () => {
        let list = [];
        list.push(itemState[1])
        list.push(itemState[2])
        list.push(itemState[5])
        return list;
    }

    const getOnSaleItems = () => {
        let saleList = [];
        saleList.push(itemState[10])
        saleList.push(itemState[11])
        saleList.push(itemState[15])
        return saleList;
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
                    <CardList cards={getOnSaleItems()}/>
                </div>
            </div>
        </div>
    )
}