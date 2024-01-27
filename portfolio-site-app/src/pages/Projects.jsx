import { Component } from "react";
import leadership from "../img/leadership.jpg";
import segmentation from "../img/segmentation.png";
import cloud from "../img/cloud.png";
import "../styles/Projects.css";

class Projects extends Component {
    render () {
        return (
            <><div className="images-projects">
                <img src={segmentation} alt="segmentation" width={400} />
                <img src={cloud} alt="cloud" width={350} />
                <img src={leadership} alt="leadership" width={350} />
            </div>
            <div className="text-projects">
                <a> Development of the customer segmentation project for the retail sector developing data engineering processes and technical leadership </a>
                <a> Migration, centralization, and development of data projects in cloud platforms supporting these as data engineer </a>
                <a> Develop data strategies in companies as a technical and area leader </a>
            </div></>
        )
    }
}

export default Projects;