import {useSelector} from "react-redux";

export default function ShoppingCart(){

    const itemsState = useSelector((state) => state.itemReducer.items)
    const accountsState = useSelector((state) => state.accountReducer.accounts);
    // template account for testing


    const test = () => {
        console.log(accountsState);
        return(
            <p>test</p>
        )
    }



    return(
        <div className={"cart_main_container"}>
            <h3>Shopping cart</h3>
            {test()}
        </div>
    )
}