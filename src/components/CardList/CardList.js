import ItemCard from "../ItemCard/ItemCard";
import "./CardList.css";

/**
 * @author Andreas Starheim Hernæs & Mathias van der Bend
 * @version v1.0
 *
 * ItemCard list component - Displays a list of given items
 */

/**
 * Takes an ItemList as input and returns a wrapper with the ItemCards inside
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function CardList(props) {
    const {cards} = props;
    return  (
        <div id={"card_list_wrapper"}>
            {cards.map((card) => <ItemCard item={card}/>)}
        </div>
    )
}
