import Hero from "../../components/Hero/Hero";
import "./Home.css";

export default function Home(){

    return(
        <div>
            <Hero/>

            <div className={"home-container"}>
                <h2>Trending right now...</h2>
                <div className={"contentBox"}>
                    <p>Items trending..</p>
                </div>
                <h2>For sale ..</h2>
                <div className={"contentBox"}>
                    <p>Items for sale..</p>
                </div>
            </div>
        </div>
    )
}