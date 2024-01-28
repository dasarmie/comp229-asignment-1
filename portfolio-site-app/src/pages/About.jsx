import { Link } from "react-router-dom";
import { Component } from "react";
import photoDS from "../img/profilePhoto.png";
import python from "../img/python.png";
import javascript from "../img/javascript.png";
import java from "../img/java.png";
import react from "../img/react.png";
import mongo from "../img/MongoDB.png";
import loadingLogo from "../img/loading.png";
import sql from "../img/sql.png";
import tsql from "../img/sql_language.png";
import spark from "../img/spark.png";
import azure from "../img/azure.png";
import databricks from "../img/databricks.png";
import git from "../img/git.png";
import db2 from "../img/db2.png";
import postgre from "../img/Postgresql.png";
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
                <p> <i> 📄 </i> <Link className="link-resumen" to="../docs/CVDiego.pdf" target="_blank"> Resumen </Link></p>
            </div>
            <div className="profile">
                <p>
                I'm an administrator Engineer, specializing in finance and currently study Software Engineer - AI. I have knowledge in creating BI - Analytics solutions
                across data analysis, building data pipelines, implementing reports and dashboards, and building architectures over On-premises and Cloud environments.
                </p>
                Additionally, I'm experience as a Data team lead with capabilities for monitoring and controlling projects, requirements gathering, and problem-solving. Passionate
                about building strong relationships, working as a team, and strengthening continuos learning focused on efficiency, quality, and improvement.
            </div>
            <div>
            <img src={python} alt="python" style={{width: 50, height: 50, position: "fixed", top: 450, left: 630}} />
            <img src={sql} alt="sql" style={{width: 70, height: 70, position: "fixed", top: 450, left: 700}} />
            <img src={tsql} alt="tsql" style={{width: 100, height: 50, position: "fixed", top: 530, left: 690}} />
            <img src={spark} alt="spark" style={{width: 100, height: 50, position: "fixed", top: 510, left: 580}} />
            <img src={azure} alt="azure" style={{width: 50, height: 50, position: "fixed", top: 570, left: 620}} />
            <img src={databricks} alt="databricks" style={{width: 100, height: 90, position: "fixed", top: 580, left: 690}} />
            <img src={git} alt="git" style={{width: 50, height: 50, position: "fixed", top: 520, left: 800}} />
            <img src={db2} alt="db2" style={{width: 80, height: 60, position: "fixed", top: 450, left: 770}} />
            <img src={postgre} alt="postgre" style={{width: 70, height: 60, position: "fixed", top: 580, left: 780}} />
            <img src={react} alt="react" style={{width: 70, height: 60, position: "fixed", top: 450, right: 380}} />
            <img src={mongo} alt="mongo" style={{width: 110, height: 50, position: "fixed", top: 450, right: 250}} />
            <img src={loadingLogo} alt="loading-logo" style={{width: 200, height: 200, position: "fixed", top: 540, right: 240}} /> 
            <img src={javascript} alt="javascript" style={{width: 150, height: 90, position: "fixed", top: 510, right: 230}} />
            <img src={java} alt="java" style={{width: 140, height: 100, position: "fixed", top: 500, right: 320}} />
            </div>
            </>
        );
    };
};

export default About;