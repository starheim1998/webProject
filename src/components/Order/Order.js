import "./Order.css";

export default function Order({order}) {


    const getItems = ()  => {
        return(
            order.items.map((item) => {
                return (
                    <li>{item.name}</li>
                )})
        )
    }

    const getSum = () => {
        let sum = 0
        order.items.forEach((item) => {
            sum += item.price
        })
        return sum
    }

    return(
        <div className={"orders"} key={order.id}>
            <ul className={"orderedItems"}>
                {getItems()}
            </ul>
            <p>{getSum()} kr</p>
            <p>{order.date}</p>
            <p>In progress</p>
        </div>
    )
}