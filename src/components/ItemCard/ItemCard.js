import "./ItemCard.css";
import {Link} from "react-router-dom";


export default function ItemCard( {item} ){
    // attributes of the product
    const {id, img, name, price} = item;


    return(
        <div className="card_container">
            <Link to={`/item/${id}`}>
                <div className="card_img">
                    <img src={img} alt=".."/>
                </div>
                <div className="card_body">
                    <h4>{name}</h4>
                    <p>{price} kr</p>
                </div>
            </Link>

        </div>
    )
}