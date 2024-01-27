import { Link } from "react-router-dom";
import { Component } from "react";
import photoDS from "../img/profilePhoto.png";
import "../styles/About.css";

class About extends Component {
    render () {
        return (
            <>
            <div className="photo">
                <img src={photoDS} alt="profile" />
            </div>
            <div className="information">
                <p> Diego Sarmiento </p>
                <p> <i>📍</i> Greater Toronto Area, ON </p>
                <p> <i> ✉️ </i> dasa1088@gmail.com </p>
                <p> <i> 🌐 </i> <Link className="link-linkedin" to="https://www.linkedin.com/in/diego-armando-sarmiento-ahumada-8a5b9171/"> in/dasarmie </Link> </p>
            </div>
            <div className="profile">
                <p>
                I'm an administrator Engineer, specializing in finance and currently study Software Engineer - AI. I have knowledge in creating BI - Analytics solutions
                across data analysis, building data pipelines, implementing reports and dashboards, and building architectures over On-premises and Cloud environments.
                </p>
                Additionally, I'm experience as a Data team lead with capabilities for monitoring and controlling projects, requirements gathering, and problem-solving. Passionate
                about building strong relationships, working as a team, and strengthening continuos learning focused on efficiency, quality, and improvement.
            </div>
            </>
        )
    }
}

export default About;