import {Link} from "react-router-dom";
import "./DropDownItem.css"


/**
 * Represent an item on the dropdown menu. Clicking the item redirects to the search page
 * @param props the category clicked on
 * @returns {JSX.Element}
 * @constructor
 */

export default function DropDownItem(props) {
    const {category} = props;

    const redirectLink = () => {
        return "/search?q=" + category;
    }

    return (
        <Link to={redirectLink()}>{category}</Link>
    )
}