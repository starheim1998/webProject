import SearchBar from "../SearchBar/SearchBar";
import {Link} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./Header.css";
import cart from "./../../img/cart.png";


export default function Header(){
    return(
        <div className="header_container">
            {/*first row of the header*/}
            <div className="first_row_header">
                <Link to="/"> <h3>Home</h3> </Link>

                <SearchBar/>

                <Link to="/Modal/Login"> <h3>Login | Register</h3> </Link>

                <Link to="/ShoppingCart/ShoppingCart">
                    <img src={cart} alt="cart link"/>
                </Link>
            </div>
            {/*navbar row*/}
            <div className="navbar_container">
                <NavBar/>
            </div>
        </div>
    )
}