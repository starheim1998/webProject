import {useEffect, useState} from "react";
import "./NavItem.css"
import {useDispatch, useSelector} from "react-redux";
import {toggleNavBar} from "../../store/actions/navBarActions";


export default function NavItem(props){
    const {name} = props
    const [isSelected, setSelected] = useState(false);
    const dispatch = useDispatch();


    useEffect(() => {
        setSelected(false)
    },[])

    const handleClick = () => {
        console.log("hei")
        dispatch(toggleNavBar());
        setSelected(true);
    }

    const getClassName = () => {
        if (isSelected){
            return "nav_item selected_nav_item"
        } else {
            return "nav_item"
        }
    }

    return(
        <div className={getClassName()} onClick={handleClick}>
                <p>{name}</p>
        </div>

    )
}