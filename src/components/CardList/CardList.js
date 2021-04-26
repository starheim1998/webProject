import "./CardList.css";
import ItemCard from "../ItemCard/ItemCard";

export default function CardList(props) {
    const {cards} = props;

    return(
        <div id={"cardList_main_container"}>
            {cards.map((card) =>
                <div className={"item_card_container"} key={card.id}>
                    <ItemCard item={card}/>
                </div>
            )}
        </div>
    )
}