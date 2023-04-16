import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import "../Styles/Footer.css";

const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Artsby</h1>
                    <p>Choose your art</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Quick Links</h4>
                    <a href="/">Artists</a>
                    <a href="/">Categories</a>
                    <a href="/">Become a seller</a>
                    <a href="/">Reques a sketch</a>
                </div>
                <div>
                    <h4>About us</h4>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                </div>
                <div>
                    <h4>Social media</h4>
                    <a href="/">Twitter</a>
                    <a href="/">Instagram</a>
                    <a href="/">Facebook</a>
                </div>
                <div>
                    <h4>Other</h4>
                    <a href="/">Terms and Services</a>
                    <a href="/">Privacy policy</a>
                    <a href="/">License</a>
                </div>
           
            </div>
        </div>       
    )
}

export default Footer