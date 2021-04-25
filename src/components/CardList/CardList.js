import "./CardList.css";

export default function CardList(props) {
    const {cards} = props;

    return(
        <div id={"cardList_main_container"}>
            {cards.map((card) =>
                <div className={"item_card_container"}>
                    {card}
                </div>
            )}
        </div>
    )
}