/* 
  File: Home.jsx
  Student's Name: Diego Sarmiento
  Student ID: 301379640
  Date: 01/28/2024
*/

/* Component to create Home's page */

import { Link } from "react-router-dom";
import { Component } from "react";
import "../styles/Home.css";

// Create Home class
class Home extends Component {
    render () {
        return (
            <><div className="welcome-container">
                {/* Define class to weilcome message */}
                <div className="welcome-message">
                    <p>
                        “Welcome to my virtual space!
                        <i>
                            👏
                        </i>
                    </p>
                    <p>
                        This is where we will dive together into to magic of adding value to your data. With innovative and cutting-edge solutions, we will work collaboratively using agile processes. My experience and knowledge gathered throughout my professional journey and data-focused projects are at your disposal. Whether your company is small, medium, or large, my goal is to help you make smarter decisions and gain a competitive edge in today’s dynamic market.
                    </p>
                    Let us embark on this exciting journey together, if you are curious click on the buttons below, and see you there!
                    <i>
                        😎
                    </i> ”
                </div>

                {/* Define class to buttons to link each pages */}
            </div><div className="buttons-container">
                    <Link class="nav-link-button" to="/about"> About </Link>
                    <Link class="nav-link-button" to="/projects"> Projects </Link>
                    <Link class="nav-link-button" to="/services"> Services </Link>
                    <Link class="nav-link-button" to="/contact"> Contact </Link>
            </div></>
        );
    };
};

export default Home;