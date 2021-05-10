import "./Aside.css"


export default function Aside(props){

    const {filterState, setFilterState, setSearch} = props

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
            colors: e.target.value}
        )
    }

    const handleCategoryChange = (e) => {
        e.preventDefault();
        setFilterState({
            ...filterState,
            category: e.target.title,
            subcategory: ""
        })
    }

    const handleSubcategoryChange = (e) => {
        e.preventDefault();
        setFilterState({
            ...filterState,
            subcategory: e.target.title,
            category: ""
        })
    }

    const showAllItems = (e) => {
        e.preventDefault();
        setFilterState({
            ...filterState,
            subcategory: "",
            category: "",
        })
        setSearch("")
    }

    return(

        <form id={"aside_wrapper"}>
                <p className={"aside_header"}>Categories</p>

                <div id={"category_container"}>
                    <div className={"category_item"}>
                        <span className={"mainCategory category"} title={""}
                        onClick={(e) => showAllItems(e)}>All products</span>
                    </div>

                    <div className={"category_item"}>
                        <span className={"mainCategory category"} title={"topwear"}
                               onClick={(e) => handleCategoryChange(e)}>Topwear</span>
                        <span className={"subcategory category"} title={"sweater"}
                              onClick={(e) => handleSubcategoryChange(e)}>Sweater</span>
                        <span className={"subcategory category"} title={"tshirt"}
                              onClick={(e) => handleSubcategoryChange(e)}>T-shirt</span>
                        <span className={"subcategory category"} title={"singlet"}
                              onClick={(e) => handleSubcategoryChange(e)}>Singlet</span>
                        <span className={"subcategory category"} title={"cardigans"}
                              onClick={(e) => handleSubcategoryChange(e)}>Cardigans</span>
                    </div>

                    <div className={"category_item"}>
                         <span className={"mainCategory category"} title={"bottomwear"}
                               onClick={(e) => handleCategoryChange(e)}>Bottomwear</span>
                        <span className={"subcategory category"} title={"jeans"}
                              onClick={(e) => handleSubcategoryChange(e)}>Jeans</span>
                        <span className={"subcategory category"} title={"joggers"}
                              onClick={(e) => handleSubcategoryChange(e)}>Joggers</span>
                        <span className={"subcategory category"} title={"sweatpants"}
                              onClick={(e) => handleSubcategoryChange(e)}>Sweatpants</span>
                        <span className={"subcategory category"} title={"shorts"}
                              onClick={(e) => handleSubcategoryChange(e)}>Shorts</span>
                    </div>

                    <div className={"category_item"}>
                         <span className={"mainCategory category"} title={"shoes"}
                               onClick={(e) => handleCategoryChange(e)}>Shoes</span>
                        <span className={"subcategory category"} title={"running"}
                              onClick={(e) => handleSubcategoryChange(e)}>Running</span>
                        <span className={"subcategory category"} title={"lifestyle"}
                              onClick={(e) => handleSubcategoryChange(e)}>Lifestyle</span>
                        <span className={"subcategory category"} title={"sneakers"}
                              onClick={(e) => handleSubcategoryChange(e)}>Sneakers</span>
                        <span className={"subcategory category"} title={"golf"}
                              onClick={(e) => handleSubcategoryChange(e)}>Golf</span>
                    </div>

                    <div className={"category_item"}>
                        <span className={"mainCategory category"} title={"sport"}
                              onClick={(e) => handleCategoryChange(e)}>Sport</span>
                        <span className={"subcategory category"} title={"football"}
                              onClick={(e) => handleSubcategoryChange(e)}>Football</span>
                        <span className={"subcategory category"} title={"weightlifting"}
                              onClick={(e) => handleSubcategoryChange(e)}>Weightlifting</span>
                        <span className={"subcategory category"} title={"tennis"}
                              onClick={(e) => handleSubcategoryChange(e)}>Tennis</span>
                        <span className={"subcategory category"} title={"basketball"}
                              onClick={(e) => handleSubcategoryChange(e)}>Basketball</span>
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
        </form>
    )
}