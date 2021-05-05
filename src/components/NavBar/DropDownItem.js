import {Link} from "react-router-dom";
import "./DropDownItem.css"


export default function DropDownItem(props){
    const {category} = props;

    const redirectLink = () => {
        return "/search?q=" + category;
    }

    return (
            <Link to={redirectLink()}>{category}</Link>
    )
}