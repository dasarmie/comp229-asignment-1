import { Link } from "react-router-dom";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome, faUser, faFolder, faCogs, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import ds_logo from "../assets/img/logoDS.png";

class NavBar extends Component {
    render () {
        return (
            <div className="container">
                <img src={ds_logo} alt="DS Logo"/>
                <ul class="nav-links">
                    <li class="nav-item">
                        <Link class="nav-link home" aria-current="page" to="/">
                            <FontAwesomeIcon icon={faHome} /> Home
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/about">
                            <FontAwesomeIcon icon={faUser} /> About
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/projects">
                            <FontAwesomeIcon icon={faFolder} /> Projects
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/services">
                            <FontAwesomeIcon icon={faCogs} /> Services
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="contact">
                            <FontAwesomeIcon icon={faEnvelope} /> Contact
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBar;