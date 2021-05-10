//Components
import Hero from "../../components/Hero/Hero";
import CardList from "../../components/CardList/CardList";
//React
import {useEffect} from "react";
//Redux
import {useDispatch, useSelector} from "react-redux";
//Actions
import {getItems} from "../../store/actions/itemActions";
//Styling
import "./Home.css";

/**
 * Home page - initial page of the website. Meant for displaying recent acquisitions, on sale items, trending items, etc.
 * @returns {JSX.Element} home page.
 */
export default function Home() {
    const itemState = useSelector((state) => state.itemReducer.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItems());
    }, [])

    //We manually set items to trending and on sale. This is implementation which would follow
    //having items be more frequently watched or have an "on sale field" which we do not have time or feel the need
    //to implement to fulfill the requirements of the project.
    const getTrendingItems = () => {
        return itemState.filter((item) => item.id === 11
            || item.id === 15 || item.id === 3)
    }

    const getOnSaleItems = () => {
        return itemState.filter((item) => item.id === 4
            || item.id === 5 || item.id === 6)
    }


    return (
        <div>
            <Hero/>
            <div className={"home-container"}>
                <h2>Trending right now</h2>
                <div className={"contentBox"}>
                    <CardList cards={getTrendingItems()}/>
                </div>
                <h2>For sale</h2>
                <div className={"contentBox"}>
                    <CardList cards={getOnSaleItems()}/>
                </div>
            </div>
        </div>
    )
}