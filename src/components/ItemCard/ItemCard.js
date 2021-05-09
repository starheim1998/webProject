import "./ItemCard.css";
import {Link} from "react-router-dom";
import {useHistory} from "react-router";


export default function ItemCard({item}){
    // attributes of the product
    const {id, img, name, price, description} = item;
    const history = useHistory();

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