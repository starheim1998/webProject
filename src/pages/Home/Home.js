import Hero from "../../components/Hero/Hero";
import "./Home.css";
import CardList from "../../components/CardList/CardList";
import {useSelector} from "react-redux";

/**
 * Home menu. We hardcoded the items for sale / trending categories as we did not see the implementation of it to
 * further develop our skills more than we already know / have .
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home(){
    const itemState = useSelector((state) => state.itemReducer.items);

    const getFrontPageItems = () => {
        let list = [];
        itemState.filter((item) => item.id > 100).
            forEach((item) => list.push(item))
        return list;
    }


    return(
        <div>
            <Hero/>
            <div className={"home-container"}>
                <h2>Trending right now...</h2>
                <div className={"contentBox"}>
                    <p>Items trending!</p>
                    <CardList cards={getFrontPageItems()}/>
                </div>
                <h2>For sale ..</h2>
                {/*<div className={"contentBox"}>*/}
                {/*    <p>Items for sale!</p>*/}
                {/*    <CardList cards={founditems}/>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}