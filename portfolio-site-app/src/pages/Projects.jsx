/* 
  File: Projects.jsx
  Student's Name: Diego Sarmiento
  Student ID: 301379640
  Date: 01/28/2024
*/

/* Component to create Project's page */

import React from "react";
import { Component } from "react";
import leadership from "../img/leadership.jpg";
import segmentation from "../img/segmentation.png";
import cloud from "../img/cloud.png";
import "../styles/Projects.css";

// Create Projects class
class Projects extends Component {
    render () {
        return (
            <><div className="images-projects">
                <img src={segmentation} alt="segmentation" width={400} />
                <img src={cloud} alt="cloud" width={350} height={250} />
                <img src={leadership} alt="leadership" width={350} height={250} />
            </div>
            
            <div className="text-projects">
                <text> Development of the customer segmentation project for the retail sector developing data engineering processes and technical leadership </text>
                <text> Migration, centralization, and development of data projects in cloud platforms supporting these as data engineer </text>
                <text> Develop data strategies in companies as a technical and area leader </text>
            </div></>
        );
    };
};

export default Projects;