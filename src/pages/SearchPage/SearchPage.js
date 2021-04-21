import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {useSelector} from "react-redux";
import ItemCard from "../../components/ItemCard/ItemCard";
import "./SearchPage.css"

export default function SearchPage(){

    const items = useSelector((state) => state.items)
    const [search, setSearch] = useState("");

    useEffect(() => {
        setSearch(getSearch)
    }, [useParams()])

    function getSearch(){
        const params = new URLSearchParams(window.location.search);
        return params.get('q');
    }

    return (
        <div className="main_container">
            <h3>The following items matched the search: {search}</h3>
            <div className="main_body">
                <div className="sidebar">

                </div>

                <div className="all_items_container">
                    {items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
                        .map((item) => {
                            return <ItemCard item={item}/>
                        })
                    }
                </div>
            </div>


        </div>
    )
}