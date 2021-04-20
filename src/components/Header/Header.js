import SearchBar from "../SearchBar/SearchBar";
import {Link} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./Header.css";


export default function Header(){
    return(
        <div className="header_container">
            <Link to="/">
                <h1>Logo</h1>
            </Link>
            <SearchBar/>
            <NavBar/>
        </div>
    )
}