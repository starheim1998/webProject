import "./Footer.css";
import {Link, NavLink} from "react-router-dom";

/*Images*/
import facebook from "./../../img/facebook-32.jpg";
import instagram from "./../../img/instagram-32.jpg";
import twitter from "./../../img/twitter-32.jpg";

/**
 * Footer component - the "bottom of the page" functionality following the entire web page.
 */
export default function Footer(){
    return(
        <div className="footer_container">
            <div className={"left-footer"}>
                <h4>Contact us</h4>
                <p>Mail: ouremail@email.com</p>
                <p>Phone number: 12345678</p>
            </div>

            <div className={"right-footer"}>
                <nav>
                    <Link to={{ pathname: "https://www.facebook.com/" }} target="_blank"><img src={facebook} alt={"Facebook link"}/></Link>
                    <Link to={{ pathname: "https://www.instagram.com/" }} target="_blank"><img src={instagram} alt={"Instagram link"}/></Link>
                    <Link to={{ pathname: "https://www.Twitter.com/" }} target="_blank"><img src={twitter} alt={"Twitter link"}/></Link>
                </nav>
            </div>
        </div>

    )
}