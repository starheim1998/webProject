
import {useState} from "react";
import './NavBar.css';
export default function NavBar(){
    return(
        <Navbar_item>
            <NavItem>
                <DropdownMenu/>
            </NavItem>
        </Navbar_item>
    );
}
function Navbar_item(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">{props.children}</ul>
        </nav>

    );
}
function NavItem(props) {

    const[open, setOpen] = useState(false);
    return (
        <li className="nav-item">
            <a className="male-button" onClick={() => setOpen(!open)}>
                Male
            </a>
            <a className="female-button" onClick={() => setOpen(!open)}>
                Female
            </a>
            {open && props.children}
            </li>
    );
}


function DropdownMenu() {
    function DropDownItem(props) {
        return (
            <a className="menu-itemm">
                {props.children}
            </a>
        );
    }
    return (
        <div className="dropdown">
            <DropDownItem> Shoes </DropDownItem>
            <DropDownItem> Bottom wear </DropDownItem>
            <DropDownItem> Top wear </DropDownItem>
            <DropDownItem> Sport </DropDownItem>

            <DropDownItem> Running </DropDownItem>
            <DropDownItem> Jeans</DropDownItem>
            <DropDownItem> T-shirt </DropDownItem>
            <DropDownItem> Football </DropDownItem>

            <DropDownItem> Lifestyle</DropDownItem>
            <DropDownItem> Joggers </DropDownItem>
            <DropDownItem> Sweater </DropDownItem>
            <DropDownItem> Weightlifting </DropDownItem>

            <DropDownItem> Sneakers </DropDownItem>
            <DropDownItem> Sweatpants </DropDownItem>
            <DropDownItem> Singlet </DropDownItem>
            <DropDownItem> Tennis </DropDownItem>

            <DropDownItem> Golf </DropDownItem>
            <DropDownItem> Shorts </DropDownItem>
            <DropDownItem> Cardigans </DropDownItem>
            <DropDownItem> Basketball </DropDownItem>
        </div>
    );
}

