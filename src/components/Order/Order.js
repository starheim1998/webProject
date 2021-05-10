import "./Order.css";

/**
 * @author Andreas Starheim Hernæs & Mathias van der Bend
 * @version v1.0
 * Represents an order item on the account page
 * @param order Order to display
 * @returns {JSX.Element}
 */

export default function Order({order}) {

    /**
     * Returns a JSX list of the items on the order
     */
    const getItems = ()  => {
        return(
            order.items.map((item) => {
                return (
                    <li>{item.name}</li>
                )})
        )
    }

    /**
     * Get the total sum of an order
     * @returns total sum
     */
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