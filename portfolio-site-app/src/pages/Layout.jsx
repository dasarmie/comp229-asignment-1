import React from "react";
import { Component } from "react";
import "../styles/Layout.css"
import layout from "../img/layout.jpg"

class Layout extends Component {
    render () {
        return (
            <div className="layout">
                <img src={layout} alt="layout" />
            </div>
        )
    }
};

export default Layout;