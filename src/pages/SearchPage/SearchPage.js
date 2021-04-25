import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {useSelector} from "react-redux";
import ItemCard from "../../components/ItemCard/ItemCard";
import Aside from "../../components/Aside/Aside";
import "./SearchPage.css"
import CardList from "../../components/CardList/CardList";


export default function SearchPage(){

    const items = useSelector((state) => state.items)
    const [search, setSearch] = useState("");
    const [filterState, setFilterState] = useState({
        category: "",
        size: "",
        color: ""
    });

    useEffect(() => {
        setSearch(getSearch)
    }, [useParams()])

    const foundItemsCount = (query) =>{
        let counter = 0;
        items.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())).forEach(() => counter++);
        return counter;
    }

    const foundItems = (query) => {
        let foundItemList = [];
        {
            items.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())
                && (item.category === filterState.category || filterState.category === "")
                && (item.size.toLowerCase() === filterState.size.toLowerCase()
                    || filterState.size === ""
                    // shoes has empty size field
                    // TODO: discuss shoe size issue
                    || item.size === "")
                && (item.color === filterState.color || filterState.color === ""))
                .map((item) => {
                    foundItemList.push(<ItemCard item={item}/>)
                })
        }
        return foundItemList;
    }


        function getSearch() {
            const params = new URLSearchParams(window.location.search);
            return params.get('q');
        }

        return (
            <div className="main_container">
                <h3>Search result: "{search}" ({foundItemsCount(search)})</h3>
                <div className="main_body">
                    <div className={"aside_container"}>
                        <Aside
                            category1={"Topwear"}
                            category2={"Bottomwear"}
                            category3={"Shoes"}
                            category4={"Sport"}
                            filterState={filterState}
                            setFilterState={setFilterState}
                        />
                    </div>

                    <div>
                        <CardList cards={foundItems(search)}/>
                    </div>
                </div>
            </div>
        )
}