import "./ItemCard.css";
import {useHistory} from "react-router";

/**
 * @author Andreas Starheim Hernæs & Mathias van der Bend
 * @version v1.0
 *
 * ItemCard component - Represents a single item-card in the CardList
 */

export default function ItemCard({item}){
    // attributes of the product
    const {id, img, name, price, description} = item;
    const history = useHistory();

    /**
     * Redirects to the ItemPage displaying the selected item
     */
    const clickItemHandler = () => {
        history.push("/Item/" + id)
    }

    return(
            <div onClick={() => clickItemHandler()} className="card_container" key={id}>
                    <div className="img_container">
                        <img src={img} alt=".."/>
                    </div>
                    <div className="card_body">
                        <h4>{name}</h4>
                        <span>{description}</span>
                        <span>{price} kr</span>
                    </div>
            </div>
    )
}