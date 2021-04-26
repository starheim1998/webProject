import "./Aside.css"


export default function Aside(props){

    const {category1, category2, category3, category4, filterState, setFilterState} = props


    const handleSizeChange = (e) => {
        e.preventDefault();
        setFilterState({
            ...filterState,
            size: e.target.value}
        )
    }

    const handleColorChange = (e) => {
        e.preventDefault();
        setFilterState({
            ...filterState,
            color: e.target.value}
        )
    }

    return(

        <form>
            <div id={"aside_wrapper"}>
                <p className={"aside_header"}>Categories</p>

                <div id={"category_container"}>
                    <div className={"category_item"}>
                        <span>All products</span>
                        <input className="checkbox" type="checkbox" value="" defaultChecked={true}/>
                    </div>

                    <div className={"category_item"}>
                        <span>{category1}</span>
                        <input className="checkbox" type="checkbox" value={category1.toLowerCase()}/>
                    </div>

                    <div className={"category_item"}>
                        <span>{category2}</span>
                        <input className="checkbox" type="checkbox" value={category2.toLowerCase()}/>
                    </div>

                    <div className={"category_item"}>
                        <span>{category3}</span>
                        <input className="checkbox" type="checkbox" value={category3.toLowerCase()}/>
                    </div>

                    <div className={"category_item"}>
                        <span>{category4}</span>
                        <input className="checkbox" type="checkbox" value={category4.toLowerCase()}/>
                    </div>
                </div>

                <p className={"aside_header"}>Filters</p>
                <div className={"select_container"}>
                    <label>Size</label>
                    <select onChange={(e) => handleSizeChange(e)}>
                        <option value="">Select size</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XLL</option>
                    </select>
                </div>

                <div className={"select_container"}>
                    <label>Color</label>
                    <select onChange={(e) => handleColorChange(e)}>
                        <option value="">Select color</option>
                        <option value="black">Black</option>
                        <option value="white">White</option>
                        <option value="blue">Blue</option>
                        <option value="gray">Gray</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                    </select>
                </div>
                
            </div>

        </form>
    )
}