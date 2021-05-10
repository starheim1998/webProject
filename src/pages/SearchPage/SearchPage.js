// React
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router";
// Actions
// Components
import Aside from "../../components/Aside/Aside";
import CardList from "../../components/CardList/CardList";
// Styling
import "./SearchPage.css"


/**
 * @author Andreas Starheim Hernæs & Mathias van der Bend
 * @version v1.0
 *
 * Search page - Page displaying search results
 */

export default function SearchPage() {

    const itemsState = useSelector((state) => state.itemReducer.items);
    const [search, setSearch] = useState("");
    // State containing current filters
    const [filterState, setFilterState] = useState({
        category: "",
        subcategory: "",
        size: "",
        colors: ""
    });

    /**
     * Rerender every time the url is changed
     * Updates the search state
     */
    useEffect(() => {
        setSearch(getSearch)
    }, [useParams()])

    /**
     * Fetches search from the URL
     * @returns {string}
     */
    function getSearch() {
        const params = new URLSearchParams(window.location.search);
        return params.get('q');
    }

    /**
     * Returns number of items matching the search
     * @param query
     * @returns {number}
     */
    const foundItemsCount = (query) => {
        let counter = 0;
        const qry = query.toLowerCase()
        itemsState.filter((item) => item.name.toLowerCase().includes(qry)
            || (item.category.toLowerCase().includes(qry))
            || (item.subcategory.toLowerCase().includes(qry))).forEach(() => counter++);
        return counter;
    }

    /**
     * Renders the header of the page
     * @returns {JSX.Element}
     */
    const getHeader = () => {
        if (search !== "") {
            return (
                <h3>Search result: "{search}" ({foundItemsCount(search)})</h3>
            );
        }
    }

    /**
     *
     * @param query
     * @returns {[]}
     */
    const foundItems = (query) => {
        let foundItemList = [];
        const qry = query.toLowerCase();
        {
            itemsState.filter((item) =>
                (item.name.toLowerCase().includes(qry)
                    || (item.category.toLowerCase().includes(qry))
                    || (item.subcategory.toLowerCase().includes(qry)))
                && (item.category.toLowerCase() === filterState.category.toLowerCase() || filterState.category === "")
                && (item.subcategory.toLowerCase() === filterState.subcategory.toLowerCase() || filterState.subcategory === "")
                && (item.size.toLowerCase() === filterState.size.toLowerCase()
                || filterState.size === ""
                || item.size === "")
                && (item.colors.toLowerCase().includes(filterState.colors.toLowerCase())
                || filterState.colors === ""))
                .map((item) => {
                    foundItemList.push(item)
                })
        }
        return foundItemList;
    }

    return (
        <div className="main_container">
            {getHeader()}
            <div className="main_body">
                <Aside
                    filterState={filterState}
                    setFilterState={setFilterState}
                    setSearch={setSearch}
                />
                <CardList cards={foundItems(search)}/>
            </div>
        </div>
    )
}