import "./ItemCard.css";


export default function ItemCard( {item} ){

    // attributes of the product
    const {id, img, name, price} = item;


    return(
        <div className="card_container">
            {/*<Link to={`/item/${id}`}>*/}
                <div className="img_container">
                    <img src={img} alt=".."/>
                </div>
                <div className="img_body">
                    <h4>{name}</h4>
                    <p>{price} kr</p>
                </div>
            {/*</Link>*/}
        </div>
    )
}