import search from "./../../img/search.jpg";
import {Link} from "react-router-dom";
import "./SearchBar.css"

export default function SearchBar(){
    return(
        <div className="search_container">
            <input
                type="text"
                placeholder="search product.."
            />

            <Link to="/SearchPage/SearchPage">
                <img src={search} alt="search_icon"/>
            </Link>
        </div>
    )
}