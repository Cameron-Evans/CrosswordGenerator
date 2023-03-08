import React from "react";
import RobotImg from "../../assets/img/dlo-robot.png";

const AboutDAngelo = () => {
  return (
    <>

      {/* About Section  */}
      <section className="about">
        <div className="container">
          <div className="about-box">
            <h4 id="personh4">D'Angelo Minnis</h4>
            <h2 id="personh2">What is another project you've worked on that helped you here?<span> What do you hope to take away from this project?</span></h2>
            <p>Another project I worked on that helped me in this project was a learning platform website application called “Mitra”, which is also a React app that I helped design and develop the front-end of.</p>
            <p>From our crossword generator project, I believe I developed good teamwork skills through working on specific parts of the project, that were then pushed to GitHub where then the rest of the team members developed on top of.</p>
            <div class="person-image">
                    <img
                    src={RobotImg}
                    alt=""
                    />
            </div>
          </div>
        </div>
      </section>

      </>
  );
}; 

export default AboutDAngelo;
