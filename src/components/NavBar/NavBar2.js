import {useState} from "react";
import DropDownMenu from "./DropDownMenu";
import NavItem from "./NavItem";
import "./NavBar2.css"
import {useSelector} from "react-redux";


export default function NavBar2(){

    const navBarState = useSelector((state) => state.navBarReducer.isOpen);


    const renderNavBarDesktop = () => {

    }

    const renderNavBarMobile = () => {

    }

    const renderDropDown = () => {
        if(navBarState){
            return(
                <DropDownMenu/>
            )
        } else {
            return (
                <></>
            )
        }
    }

    return (
        <div className={"navbar_wrapper"}>
            <div className={"navitems_wrapper"}>
                <NavItem name={"Men"}/>
                <NavItem name={"Women"}/>
                {renderDropDown()}
            </div>

        </div>
    )
}