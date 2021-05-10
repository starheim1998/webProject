import search_icon from "../../img/search_icon.jpg";
import "./SearchBar.css"
import {useState} from "react";
import {useHistory} from "react-router";

/**
 * @author Andreas Starheim Hernæs & Mathias van der Bend
 * @version v1.0
 *
 * Search Bar component - Redirecting to search page with the search input
 */

export default function SearchBar() {
    const [input, setInput] = useState("");
    const history = useHistory()

    /**
     * Handles a search. Redirects to the search page with the search input
     * @param e
     */
    const handleSearch = (e) => {
        e.preventDefault();
        if (input.trim() !== "") {
            history.push("/search?q=" + input);
        }
        //clear search field
        setInput("");
    }

    return (
        <form onSubmit={handleSearch}>
            <div className="search_container">
                <input className="search_input"
                       type="text"
                       placeholder="search product.."
                       value={input}
                       onChange={(e) => setInput(e.target.value)}
                />

                <button type="submit">
                    <img src={search_icon} alt="search_icon"/>
                </button>
            </div>
        </form>


    )
}
