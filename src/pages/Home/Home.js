import Hero from "../../components/Hero/Hero";
import "./Home.css";
import CardList from "../../components/CardList/CardList";
import converse from "./../../img/converse.jpg";
import reddress from "./../../img/red-dress.jpg";
import shoes from "./../../img/a-big-shoe.jpg";

/**
 * Home menu. We hardcoded the items for sale / trending categories as we did not see the implementation of it to
 * further develop our skills more than we already know / have .
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home(){
   const card = [{
        id: 102,
       img: converse,
        name: "Converse!",
        price: 1200
    },
    {
        id: 103,
        img: reddress,
        name: "Red dress!!!",
        price: 100000
    },
       {
           id: 104,
           img: shoes,
           name: "Shoes!!",
           price: 100000
       }]

    return(
        <div>
            <Hero/>
            <div className={"home-container"}>
                <h2>Trending right now...</h2>
                <div className={"contentBox"}>
                    <p>Items trending!</p>
                    <CardList cards={card}/>
                </div>
                <h2>For sale ..</h2>
                <div className={"contentBox"}>
                    <p>Items for sale!</p>
                    <CardList cards={card}/>
                </div>
            </div>
        </div>
    )
}