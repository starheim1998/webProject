import "./NavItem.css"
import {useDispatch} from "react-redux";
import {toggleNavBar} from "../../store/actions/navBarActions";

/**
 * @author Andreas Starheim Hernæs & Mathias van der Bend
 * @version v1.0
 *
 * Nav Item component. Clicking the nav item opens an dropdown menu
 */

export default function NavItem(props){
    const {name} = props
    const dispatch = useDispatch();

    /**
     * Clicking the nav item opens the dropdown menu
     */
    const handleClick = () => {
        dispatch(toggleNavBar());
    }

    return(
        <div className={"nav_item"} onClick={handleClick}>
                <p>{name}</p>
        </div>

    )
}