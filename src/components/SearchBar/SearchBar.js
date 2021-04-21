import search_icon from "../../img/search_icon.jpg";
import "./SearchBar.css"
import {useState} from "react";
import {useHistory} from "react-router";

export default function SearchBar() {
    const [input, setInput] = useState("");
    const history = useHistory()


    const handleSearch = (e) => {
        e.preventDefault();
        history.push("/search?q=" + input);

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
