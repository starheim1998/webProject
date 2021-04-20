import "./Footer.css";
import {NavLink} from "react-router-dom";

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
                    <NavLink to={"FACEBOOK LINK"}><img src={facebook} alt={"Facebook link"}/></NavLink>
                    <NavLink to={"INSTAGRAM LINK"}><img src={instagram} alt={"Instagram link"}/></NavLink>
                    <NavLink to={"TWITTER LINK"}><img src={twitter} alt={"Twitter link"}/></NavLink>
                </nav>
            </div>
        </div>

    )
}