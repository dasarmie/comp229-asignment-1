import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Contact.css";

class Contact extends Component {
    render () {
        return (
            <div className="form-container">
                <text>
                    Contact Us
                <form className="form-information">
                    <label>
                        First Name:
                        <input type="text" name="first-name" />
                    </label>
                    <br />

                    <label>
                        Last Name:
                        <input type="text" name="last-name" />
                    </label>
                    <br />

                    <label>
                        Contact Number:
                        <input type="text" name="contact-number" />
                    </label>
                    <br />

                    <label>
                        Email Address:
                        <input type="email" name="email-address" />
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
        );
    };
};

export default Contact;