import "./Orders.css";

export default function Orders({items, sum, date, status}) {

    return(
        <div className={"ordersWrapper"}>
            <div className={"orders"}>
                <li>
                    {items}
                </li>
                {/*<p>{sum}</p>*/}
                <p>{date}</p>
                {/*<p>{status}</p>*/}
            </div>
        </div>
    )
}