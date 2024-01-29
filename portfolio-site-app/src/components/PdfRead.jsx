/* 
  File: PdfRead.jsx
  Student's Name: Diego Sarmiento
  Student ID: 301379640
  Date: 01/28/2024
*/

/* Component to create pdf configuration for open CV pdf file */

import React from "react";
import { Component } from "react";

// Create PDFRead class
class PDFRead extends Component {
    render () {
        return (
                <div className="pdf-read">
                    <embed 
                        src="../docs/CVDiego.pdf" type="application/pdf" width="100%" height="600px" >
                    </embed>
                </div>
        );
    };
};

export default PDFRead;