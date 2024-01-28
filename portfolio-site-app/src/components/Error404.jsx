import React from "react";
import { Component } from "react";
import "../styles/Error404.css";

class Error404 extends Component {
    render () {
        return (
            <div className="text-container">
                <p>
                <text className="error-code"> 404 </text>
                </p>

                <p>
                <text className="error-title"> Not Found </text>
                </p>

                <p>
                <text className="error-message"> The resource requested could not be found on this server! </text>
                </p>
            </div>
        );
    };
};

export default Error404;