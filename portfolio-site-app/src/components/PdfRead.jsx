import React from "react";
import { Component } from "react";

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