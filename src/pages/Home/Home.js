import Hero from "../../components/Hero/Hero";
import "./Home.css";
import CardList from "../../components/CardList/CardList";
import {frontpageDummyItems} from "../../frontpageDummyItems";

/**
 * Home menu. We hardcoded the items for sale / trending categories as we did not see the implementation of it to
 * further develop our skills more than we already know / have .
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home(){
    return(
        <div>
            <Hero/>
            <div className={"home-container"}>
                <h2>Trending right now...</h2>
                <div className={"contentBox"}>
                    <p>Items trending!</p>
                    <CardList cards={frontpageDummyItems}/>
                </div>
                <h2>For sale ..</h2>
                <div className={"contentBox"}>
                    <p>Items for sale!</p>
                    <CardList cards={frontpageDummyItems}/>
                </div>
            </div>
        </div>
    )
}