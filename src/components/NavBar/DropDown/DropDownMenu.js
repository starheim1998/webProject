//React
import {useEffect} from "react";
import {useDispatch} from "react-redux";

//Components
import DropDownItem from "./DropDownItem";
import {toggleNavBar} from "../../../store/actions/navBarActions";

//Styling
import "./DropDownMenu.css"

/**
 * @author Andreas Starheim Hernæs & Mathias van der Bend
 * @version v1.0
 *
 * Dropdown menu component
 */



export default function DropDownMenu() {

    const dispatch = useDispatch();

    /**
     * Set navbar state to false after clicking on dropdown item
     */
    const toggleMenu = (e) => {
        setTimeout(() => {
            if (!e.target.classList.contains("desktop_menu")) {
                dispatch(toggleNavBar());
            }
        }, 150)

    }

    //TODO: COMMENT
    useEffect(() => {
        document.addEventListener("mousedown", toggleMenu)
        return () => {
            document.removeEventListener("mousedown", toggleMenu)
        }
    }, [])

    return (

        <div className={"desktop_menu"}>
            <div className={"categoryMenu"}>
                <DropDownItem category={"Topwear"}/>
                <DropDownItem category={"Sweater"}/>
                <DropDownItem category={"Tshirt"}/>
                <DropDownItem category={"Singlet"}/>
                <DropDownItem category={"Cardigans"}/>
            </div>

            <div className={"categoryMenu"}>
                <DropDownItem category={"Bottomwear"}/>
                <DropDownItem category={"Jeans"}/>
                <DropDownItem category={"Joggers"}/>
                <DropDownItem category={"Sweatpants"}/>
                <DropDownItem category={"Shorts"}/>
            </div>
            <div className={"categoryMenu"}>
                <DropDownItem category={"Shoes"}/>
                <DropDownItem category={"Running"}/>
                <DropDownItem category={"Lifestyle"}/>
                <DropDownItem category={"Sneakers"}/>
                <DropDownItem category={"Golf"}/>
            </div>
            <div className={"categoryMenu"}>
                <DropDownItem category={"Sport"}/>
                <DropDownItem category={"Football"}/>
                <DropDownItem category={"Weightlifting"}/>
                <DropDownItem category={"Tennis"}/>
                <DropDownItem category={"Basketball"}/>
            </div>
        </div>
    )
}