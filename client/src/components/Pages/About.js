import React from "react";
import RobotImg from "../../assets/img/robot.png";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <>
      {/* About Section  */}
      <section className="about">
        <div className="container">
          <div className="about-box">
            <h4>Behind the scenes</h4>
            <h2>Why we created the <span>crossword puzzle.</span></h2>
            <p>
              To play a crossword puzzle you either have to play one made by someone else
              or make one yourself. With the capabilities of today's technology we ponder the question:
              Why can't crossword puzzles be automatically generated?
            </p>
            <div className="about-button">
            <Link class="btn-green" to="/">Make a crossword</Link>
            </div>
            
            {/* <div className="about-button">
              <a className="btn-green">
                <Link className="btn-green" to={"/Home"}>
                  Make a crossword
                </Link>
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <div className="team-box">

            <div className="team-card">
              <div className="team-icon-box">
                <div className="team-icon1">
                  <i className="material-symbols-outlined">person</i>
                </div>
                <div className="team-icon2">
                  <i className="material-symbols-outlined">code</i>
                </div>
              </div>
              <h3>What is another project you've worked on that helped you here?</h3>
              <p>Another project I've worked on is my senior project, a Peer to Peer search engine called deroute!</p>
              <div className="team-button">
                <Link className="btn-transparent" to={"/AboutCameron"}>More On Cameron &#8594;</Link>
              </div>
            </div>

            <div className="team-card">
              <div className="team-icon-box">
                <div className="team-icon1">
                  <i className="material-symbols-outlined">person</i>
                </div>
                <div className="team-icon2">
                  <i className="material-symbols-outlined">code</i>
                </div>
              </div>
              <h3>What is another project you've worked on that helped you here?</h3>
              <p>In my free time I like to do game development and I have found that parts of that carry over to this project.</p>
              <div className="team-button">
                <Link className="btn-transparent" to={"/AboutPhil"}>More On Phil &#8594;</Link>
              </div>
            </div>

            <div className="team-card">
              <div className="team-icon-box">
                <div className="team-icon1">
                  <i className="material-symbols-outlined">person</i>
                </div>
                <div className="team-icon2">
                  <i className="material-symbols-outlined">code</i>
                </div>
              </div>
              <h3>What is another project you've worked on that helped you here?</h3>
              <p>Besides basic web design,this is my first experience with non-static web apps using React.</p>
              <div className="team-button">
                <Link className="btn-transparent" to={"/AboutEthan"}>More On Ethan &#8594;</Link>
              </div>
            </div>

            <div className="team-card">
              <div className="team-icon-box">
                <div className="team-icon1">
                  <i className="material-symbols-outlined">person</i>
                </div>
                <div className="team-icon2">
                  <i className="material-symbols-outlined">code</i>
                </div>
              </div>
              <h3>What is another project you've worked on that helped you here?</h3>
              <p>AOne of my internships required work to be completed in React Native, so the work helped me.</p>
              <div className="team-button">
                <Link className="btn-transparent" to={"/AboutDaniel"}>More On Daniel &#8594;</Link>
              </div>
            </div>

            <div className="team-card">
              <div className="team-icon-box">
                <div className="team-icon1">
                  <i className="material-symbols-outlined">person</i>
                </div>
                <div className="team-icon2">
                  <i className="material-symbols-outlined">code</i>
                </div>
              </div>
              <h3>What is another project you've worked on that helped you here?</h3>
              <p>My senior project involves collecting data from users of our system and storing it within SQL.</p>
              <div className="team-button">
                <Link className="btn-transparent" to={"/AboutCampbell"}>More On Campbell &#8594;</Link>
              </div>
            </div>

            <div className="team-card">
              <div className="team-icon-box">
                <div className="team-icon1">
                  <i className="material-symbols-outlined">person</i>
                </div>
                <div className="team-icon2">
                  <i className="material-symbols-outlined">code</i>
                </div>
              </div>
              <h3>What is another project you've worked on that helped you here?</h3>
              <p>Another project I worked on that helped me in this project was a website application called “Mitra.”</p>
              <div className="team-button">
                <Link className="btn-transparent" to={"/AboutDAngelo"}>More On D'Angelo &#8594;</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
};

export default About;
