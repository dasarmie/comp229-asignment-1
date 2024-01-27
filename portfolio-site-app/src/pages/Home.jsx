import { Link } from "react-router-dom";
import { Component } from "react";
import "../styles/Home.css";

class Home extends Component {
    render () {
        return (
            <><div className="WelcomeContainer">
                <div className="WelcomeMessage">
                    <p>
                        “Welcome to my virtual space!
                        <i>
                            👏
                        </i>
                    </p>
                    <p>
                        This is where we will dive together into to magic of adding value to your data. With innovative and cutting-edge solutions, we will work collaboratively using agile processes. My experience and knowledge gathered throughout my professional journey and data-focused projects are at your disposal. Whether your company is small, medium, or large, my goal is to help you make smarter decisions and gain a competitive edge in today’s dynamic market.
                    </p>
                    Let us embark on this exciting journey together, if you are courious click on the buttons below, and see you there!
                    <i>
                        😎
                    </i> ”
                </div>
            </div><div className="ButtonsContainer">
                    <Link class="nav-link-button" to="/about"> About </Link>
                    <Link class="nav-link-button" to="/projects"> Projects </Link>
                    <Link class="nav-link-button" to="/services"> Services </Link>
                    <Link class="nav-link-button" to="/contact"> Contact </Link>
            </div></>
        )
    }
}

export default Home;