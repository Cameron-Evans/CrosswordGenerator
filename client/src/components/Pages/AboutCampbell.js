import React from "react";
import RobotImg from "../../assets/img/campbell-robot.png";

const AboutCampbell = () => {
  return (
    <>

      {/* About Section  */}
      <section className="about">
        <div className="container">
          <div className="about-box">
            <h4 id="personh4">Campbell Lewis</h4>
            <h2 id="personh2">What is another project you've worked on that helped you here?<span> What do you hope to take away from this project?</span></h2>
            <p>My senior project involves collecting data from users of our system and storing it within an SQL database, so the practice I gained from that helped me to interact with the MongoDB database on this project. Aside from that I am completely new to web development, so it was a learning experience from me.</p>
            <p>As I mentioned I am new to web development, so this project is valuable experience, as well as a rare project that is actually something I can publicly show off. This was also, in terms of members, the largest group project I have been a part of, so I'm gaining some experience learning what the workflow is like shared among this many people.</p>
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

export default AboutCampbell;
