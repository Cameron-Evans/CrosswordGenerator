import React from "react";
import { Link } from 'react-router-dom'
import RobotImg from "../../assets/img/404-robot.png";

const PageNotFound = () => (
    <div class="PageNotFound">
        <div class="PageNotFound-scene">
            <div class="services-card-image">
                <img src={RobotImg} alt="" />
            </div>
            <div className="PageNotFound-text">404</div>
            <div className="PageNotFound-text">Page Not Found!</div>
            <br></br>
            <br></br>
            <Link className="btn-green" to="/">Back to home</Link>
        </div>
    </div>
);
export default PageNotFound;