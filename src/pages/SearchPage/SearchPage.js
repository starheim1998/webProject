import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {useSelector} from "react-redux";
import ItemCard from "../../components/ItemCard/ItemCard";
import Aside from "../../components/Aside/Aside";
import "./SearchPage.css"
import CardList from "../../components/CardList/CardList";


export default function SearchPage(props){

    const items = useSelector((state) => state.items)
    const [search, setSearch] = useState("");
    const [filterState, setFilterState] = useState({
        category: "",
        size: "",
        color: ""
    });
    //TODO: implement this functionality
    // get selected category from navbar
    const {selectedCategory} = props;

    useEffect(() => {
        setSearch(getSearch)
    }, [useParams()])

    const foundItemsCount = (query) =>{
        let counter = 0;
        items.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())).forEach(() => counter++);
        return counter;
    }

    const getHeader = () => {
        if(search !== "") {
            return (
                <h3>Search result: "{search}" ({foundItemsCount(search)})</h3>
            );
        } else {
            //TODO: category header
            return (
                <h3> {selectedCategory} </h3>
            )
        }
    }

    const foundItems = (query) => {
        let foundItemList = [];
        {
            items.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())
                && (item.category === filterState.category || filterState.category === "")
                && (item.size.toLowerCase() === filterState.size.toLowerCase()
                    || filterState.size === ""
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
                {getHeader()}
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