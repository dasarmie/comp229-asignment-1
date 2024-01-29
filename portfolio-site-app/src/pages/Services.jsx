/* 
  File: Services.jsx
  Student's Name: Diego Sarmiento
  Student ID: 301379640
  Date: 01/28/2024
*/

/* Component to create Service's page */

import React from "react";
import { Component } from "react";
import dataArchitecture from "../img/DAR.png";
import dataSteward from "../img/DS.png";
import dataEngineer from "../img/DE.png";
import dataAnalyst from "../img/DA.png"
import "../styles/Services.css";

// Create Services class
class Services extends Component {
    render () {
        return (
            <><div className="images-services">
                <img src={dataEngineer} alt="segmentation" width={300} height={200} />
                <img src={dataAnalyst} alt="cloud" width={300} height={200} />
                <img src={dataArchitecture} alt="leadership" width={300} height={200} />
                <img src={dataSteward} alt="leadership" width={300} height={200} />
            </div>

            <div className="text-services">
                <text> Ingest, Design, Develop <p></p> and Transform </text>
                <text> Analysis and visualization <p></p> of data </text>
                <text> Build and deploy data <p></p> architectures </text>
                <text> Data quality and clean </text>
            </div></>
        );
    };
};

export default Services;