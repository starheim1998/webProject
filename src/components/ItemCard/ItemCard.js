import {Link} from "react-router-dom";


export default function ItemCard( {product}){

    // attributes of the product
    const [id, img, name, price] = product;


    return(
        <div className="card_container">
            <Link to={`/item/${id}`}>
                <div className="img_container">
                    <img src={img} alt=".."/>
                </div>
                <div className="img_body">
                    <h4>{name}</h4>
                    <p>{price} kr</p>
                </div>
            </Link>
        </div>
    )
}