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
    const itemState = useSelector((state) => state.itemReducer.items)


    const founditems = [];
    for (let i = 0; i < itemState.length; i++) {
        if(itemState[i].id > 100){
            founditems.push(itemState[i]);
        }
    }

    return(
        <div>
            <Hero/>
            <div className={"home-container"}>
                <h2>Trending right now...</h2>
                <div className={"contentBox"}>
                    <p>Items trending!</p>
                    <CardList cards={founditems}/>
                </div>
                <h2>For sale ..</h2>
                <div className={"contentBox"}>
                    <p>Items for sale!</p>
                    <CardList cards={founditems}/>
                </div>
            </div>
        </div>
    )
}