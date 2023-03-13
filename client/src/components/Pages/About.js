import React from "react";
import RobotImg from "../../assets/img/robot.png";
import cameronRobot from "../../assets/img/cameron-robot.png";
import campbellRobot from "../../assets/img/campbell-robot.png";
import dangeloRobot from "../../assets/img/dlo-robot.png";
import danielRobot from "../../assets/img/daniel-robot.png";
import ethanRobot from "../../assets/img/ethan-robot.png";
import philRobot from "../../assets/img/phil-robot.png";
import { Link } from "react-router-dom";

export const Cameron = {
  name: "Cameron Evans",
  answer1: "Another project I've worked on is my senior project, a Peer to Peer search engine called deroute! As far as we know, it's the first fully distributed peer to peer search engine out there. It also uses the fastText library so many of the same problems with CrosswordGen popped up with that project.",
  answer2: "I'm hoping this project gives me a nice resume piece and something neat I can show my grandma.",
  robot: cameronRobot
}

export const Campbell = {
  name: "Campbell Lewis",
  answer1: "My senior project involves collecting data from users of our system and storing it within an SQL database, so the practice I gained from that helped me to interact with the MongoDB database on this project. Aside from that I am completely new to web development, so it was a learning experience from me.",
  answer2: "As I mentioned I am new to web development, so this project is valuable experience, as well as a rare project that is actually something I can publicly show off. This was also, in terms of members, the largest group project I have been a part of, so I'm gaining some experience learning what the workflow is like shared among this many people.",
  robot: campbellRobot
}

export const DAngelo = {
  name: "D'Angelo Minnis",
  answer1: "Another project I worked on that helped me in this project was a learning platform website application called “Mitra”, which is also a React app that I helped design and develop the front-end of.",
  answer2: "From our crossword generator project, I believe I developed good teamwork skills through working on specific parts of the project, that were then pushed to GitHub where then the rest of the team members developed on top of.",
  robot: dangeloRobot
}

export const Daniel = {
  name: "Daniel Ho",
  answer1: "One of my internships required work to be completed in React Native, so the work I did there really helped me hit the ground running faster.",
  answer2: "I was hoping to be able to increase my experience with react and create another resume stuffer.",
  robot: danielRobot
}

export const Ethan = {
  name: "Ethan Haeck",
  answer1: "Besides basic web design, I've never used React before so this is my first experience with non-static web apps.",
  answer2: "A nice resume item and a game to play when I'm bored.",
  robot: ethanRobot
}

export const Phil = {
  name: "Phil Steinke",
  answer1: "In my free time I like to do game development and I have found that parts of that carry over to this project; like creating interactable components that can be reused and the general parent child structure that you build out pages with.",
  answer2: "I'm completely new to web design, so I went in to this project hoping to strengthen my understanding of the core design and implementation techniques for creating websites and web applications.",
  robot: philRobot
}

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
            <Link title="MakeButton" class="btn-green" to="/">Make a crossword</Link>
            </div>
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
