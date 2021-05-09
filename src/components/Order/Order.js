import "./Order.css";

export default function Order({items, quantity, sum, date, status}) {

    const itemList = []
    items.forEach((item) => {
        itemList.push(item.name)
    })
    console.log(itemList)

    return(
        <div className={"ordersWrapper"}>
            <div className={"orders"}>
                <li>
                    {itemList}
                </li>
                {/*<p>{sum}</p>*/}
                <p>{date}</p>
                {/*<p>{status}</p>*/}
            </div>
        </div>
    )
}