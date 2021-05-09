import "./DropDownMenu.css"
import DropDownItem from "./DropDownItem";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleNavBar} from "../../store/actions/navBarActions";

export default function DropDownMenu(){

    const navBarState = useSelector((state) => state.navBarReducer.isOpen);
    const dispatch = useDispatch();

    const toggleMenu = (e) => {
        setTimeout(() => {
            if (!e.target.classList.contains("desktop_menu")){
                console.log(navBarState)
                dispatch(toggleNavBar());
                console.log(navBarState)
            }
        }, 150)

        }

    useEffect(() => {
        document.addEventListener("mousedown", toggleMenu)
        return () => {
            document.removeEventListener("mousedown", toggleMenu)
        }
    },[])

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