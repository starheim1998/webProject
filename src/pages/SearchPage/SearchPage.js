import {useEffect, useState} from "react";
import {useParams} from "react-router";
import Aside from "../../components/Aside/Aside";
import "./SearchPage.css"
import CardList from "../../components/CardList/CardList";
import {API_URL} from "../../config";
import {f} from "react-select/dist/index-4bd03571.esm";


export default function SearchPage(props){

    // const itemsState = useSelector((state) => state.itemReducer.items)
    const [search, setSearch] = useState("");
    const [filterState, setFilterState] = useState({
        category: "",
        subcategory: "",
        size: "",
        colors: ""
    });

    const [items, setItems] = useState([]);

    // Code adapted from:
    // https://github.com/NTNU-SysDev/react-demo-shop-with-api/tree/master/webapp/src
    //TODO: Loading twice? fetch error
    function loadItems(){
        fetch(API_URL + "/item")
            .then((res) => res.json())
            .then((json) => setItems(json))
            .catch(function (err) {
                alert("ERROR:" + err);
            });
    }

    //TODO: implement this functionality
    // get selected category from navbar
    const {selectedCategory} = props;

    useEffect(() => {
        setSearch(getSearch)
        loadItems()
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
        console.log(foundItemList);

            {
            items.filter((item) =>
                item.name.toLowerCase().includes(query.toLowerCase())
                && (item.category === filterState.category || filterState.category === "")
                && (item.subcategory === filterState.subcategory || filterState.subcategory === "")
                && (item.size.toLowerCase() === filterState.size.toLowerCase()
                    || filterState.size === ""
                    // TODO: discuss shoe size issue
                    || item.size === "")
                && (item.colors.toLowerCase().includes(filterState.colors.toLowerCase())
                    || filterState.colors === ""))
                .map((item) => {
                    foundItemList.push(item)
                    console.log(item)
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