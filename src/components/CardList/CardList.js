import "./CardList.css";
import ItemCard from "../ItemCard/ItemCard";

export default function CardList(props) {
    const {cards} = props;
    return  (
        <div id={"card_list_wrapper"}>
            {cards.map((card) => <ItemCard item={card}/>)}
        </div>
    )
}
