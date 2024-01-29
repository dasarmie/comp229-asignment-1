/* 
  File: Services.jsx
  Student's Name: Diego Sarmiento
  Student ID: 301379640
  Date: 01/28/2024
*/

/* Component to create Service's page */

import React from "react";
import { Component } from "react";
import "../styles/Error404.css";

// Create Error 404 class
class Error404 extends Component {
    render () {
        return (
            <div className="text-container">
                {/* Define class to print error message when a page is not found*/}
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