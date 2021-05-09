//
// import {useState} from "react";
// import './NavBar.css';
// import {Link} from "react-router-dom";
// export default function NavBar(){
//     return(
//         <Navbar_item>
//             <NavItem>
//                 <DropdownMenu/>
//             </NavItem>
//         </Navbar_item>
//     );
// }
// function Navbar_item(props) {
//     return (
//         <nav className="navbar">
//             <ul className="navbar-nav">{props.children}</ul>
//         </nav>
//
//     );
// }
// function NavItem(props) {
//
//     const[open, setOpen] = useState(false);
//     return (
//         <li className="nav-item">
//             <a href={"#"} className="male-button" onClick={() => setOpen(!open)}>
//                 Male
//             </a>
//             <a href={"#"} className="female-button" onClick={() => setOpen(!open)}>
//                 Female
//             </a>
//             {open && props.children}
//             </li>
//
//     );
// }
//
//
// function DropdownMenu() {
//     function DropDownItem(props) {
//         return (
//             <a onClick={console.log("hei")} className="menu-item">
//                 {props.children}
//             </a>
//         );
//     }
//     return (
//         <div className="dropdown">
//             <DropDownItem>  <Link > Shoes </Link>  </DropDownItem>
//             <DropDownItem> <Link> Bottom wear </Link> </DropDownItem>
//             <DropDownItem> <Link> Top wear </Link> </DropDownItem>
//             <DropDownItem> <Link> Sport </Link> </DropDownItem>
//
//             <DropDownItem> <Link> Running </Link> </DropDownItem>
//             <DropDownItem> <Link> Jeans </Link></DropDownItem>
//             <DropDownItem> <Link> T-shirt </Link> </DropDownItem>
//             <DropDownItem> <Link> Football </Link> </DropDownItem>
//
//             <DropDownItem> <Link> Lifestyle </Link></DropDownItem>
//             <DropDownItem> <Link> Joggers </Link> </DropDownItem>
//             <DropDownItem> <Link> Sweater </Link> </DropDownItem>
//             <DropDownItem> <Link> Weightlifting </Link> </DropDownItem>
//
//             <DropDownItem> <Link> Sneakers </Link> </DropDownItem>
//             <DropDownItem> <Link> Sweatpants </Link> </DropDownItem>
//             <DropDownItem> <Link> Singlet </Link> </DropDownItem>
//             <DropDownItem> <Link> Tennis </Link> </DropDownItem>
//
//             <DropDownItem> <Link> Golf </Link> </DropDownItem>
//             <DropDownItem> <Link> Shorts </Link> </DropDownItem>
//             <DropDownItem> <Link> Cardigans </Link> </DropDownItem>
//             <DropDownItem> <Link> Basketball </Link> </DropDownItem>
//         </div>
//     );
// }
//
