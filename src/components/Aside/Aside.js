import "./Aside.css"

export default function Aside(props){

    const {category1, category2, category3, category4} = props



    return(
        <div className="aside_container">
            <div className="category_container">
                <div className="title_container">
                    <span className="title_span">Categories</span>
                </div>
                <div className="category">{category1}</div>
                <div className="category">{category2}</div>
                <div className="category">{category3}</div>
                <div className="category">{category4}</div>
            </div>

            <div className="filter_container">
                <div className="title_container">
                    <span className="title_span">Filters</span>
                </div>
                <div>
                    <select id="size_filter">
                        <option value="small">S</option>
                        <option value="medium">M</option>
                        <option value="large">L</option>
                    </select>
                </div>
                
                <div>
                    <select id="color_selector">
                        <option value="black">Black</option>
                        <option value="white">White</option>
                        <option value="blue">Blue</option>
                    </select>
                </div>

            </div>
        </div>
    )
}