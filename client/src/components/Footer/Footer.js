import React from "react";
import "./Footer.css";
import cwLogo2 from "../../assets/img/cw-logo-01.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="footer" id="footer">
        <div className="container">
          <div className="footer-box">
            <div className="footer-box-company">
              <img src={cwLogo2} alt="logo image" />
              <p>
                This is a crossword generator application that generates
                crossword puzzles around your keyword.
              </p>
              <p>Copyright © 2023 Crossword Generator - All rights reserved.</p>
              {/* <!-- Start of Contact Form --> */}
              <div className="contact-box">
              <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                {/* <div className="contact-item">
                  <h5>Name*</h5>
                  <input
                    type="text"
                    name="First Name"
                    id=""
                    className="input"
                    placeholder="Name"
                    required
                  />
                </div> */}
                <div className="contact-item">
                  <h5>Email*</h5>
                  <input
                    type="text"
                    name="First Name"
                    id=""
                    className="input"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="contact-item">
                  <h5>Message*</h5>
                  <textarea
                    name="Message"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="contact-submit">
                  <div className="contact-button">
                    <input type="submit" value="Submit" className="btn-green" />
                  </div>
                </div>
              </form>
              </div>
              {/* <!-- End of Contact Form --> */}
            </div>
            <div className="footer-box-links">
              <h3>Site Map</h3>
              <ul>
              <a href="#">
                <li>
                <Link to="/">Home</Link>
                </li>
              </a>
              <a href="#">
                <li>
                <Link to="/About">About</Link>
                </li>
              </a>
              <a href="#">
                <li>
                <Link to="/FAQ">FAQ</Link>
                </li>
              </a>
              <a href="#">
                <li>
                <Link to="/Share">Share</Link>
                </li>
              </a>
              <a href="#">
                <li>
                <Link to="/Login">Login</Link>
                </li>
              </a>
              </ul>
            </div>
            <div className="footer-box-socials">
              <h3>Social Media</h3>
              <a href="https://www.instagram.com/" target="_blank">
                <li>
                  <i className="fab fa-instagram"></i>
                </li>
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <li>
                  <i className="fab fa-facebook-f"></i>
                </li>
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <li>
                  <i className="fab fa-linkedin-in"></i>
                </li>
              </a>
            </div>
            <div className="footer-box-development">
              <h3>Contact Us</h3>
              <a href="#">
                <li>
                <Link to="/AboutCameron">Cameron Evans</Link>
                </li>
              </a>
              <a href="#">
                <li>
                <Link to="/AboutPhil">Phil Steinke</Link>
                </li>
              </a>
              <a href="#">
                <li>
                <Link to="/AboutEthan">Ethan Haeck</Link>
                </li>
              </a>
              <a href="#">
                <li>
                <Link to="/AboutDaniel">Daniel Ho</Link>
                </li>
              </a>
              <a href="#">
                <li>
                <Link to="/AboutCampbell">Campbell Lewis</Link>
                </li>
              </a>
              <a href="#">
                <li>
                <Link to="/AboutDAngelo">D'Angelo Minnis</Link>
                </li>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
