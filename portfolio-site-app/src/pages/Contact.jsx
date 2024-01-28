import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Contact.css"

class Contact extends Component {
    render () {
        return (
            <div className="formContainer">
                <text>
                    Contact Us
                <form className="formInformation">
                    <label>
                        First Name:
                        <input type="text" name="firstName" />
                    </label>
                    <br />

                    <label>
                        Last Name:
                        <input type="text" name="lastName" />
                    </label>
                    <br />

                    <label>
                        Contact Number:
                        <input type="text" name="contactNumber" />
                    </label>
                    <br />

                    <label>
                        Email Address:
                        <input type="email" name="emailAddress" />
                    </label>
                    <br />

                    <label>
                        Message:
                        <textarea name="message" />
                    </label>
                    <br />

                    <Link class="link-button-home" to="/"> Submit </Link>
                </form>
                </text>
            </div>
        )
    }
};

export default Contact;