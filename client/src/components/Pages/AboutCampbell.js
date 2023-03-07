import React from "react";
import RobotImg from "../../assets/img/robot.png";

const AboutCampbell = () => {
  return (
    <>
      {/* AboutMember Section  */}
      <section class="aboutMember">
        <div class="container">
          
          <div class="aboutMember-box">
            <h1>About</h1>
            
            <h2>Campbell Lewis</h2>
            
            <h3>What is another project you've worked on that helped you here?</h3>
            <p>
              My senior project involves collecting data from users of our system and storing it within an SQL database, so the practice I gained from that helped me to interact with the MongoDB database on this project. Aside from that I am completely new to web development, so it was a learning experience from me.
            </p>
            <h3>What do you hope to take away from this project?</h3>
            <p>
              As I mentioned I am new to web development, so this project is valuable experience, as well as a rare project that is actually something I can publicly show off. This was also, in terms of members, the largest group project I have been a part of, so I'm gaining some experience learning what the workflow is like shared among this many people.
            </p>
            <div class="aboutMember-box-image">
                    <img
                    src={RobotImg}
                    alt="Logo Genius Logo Design Service"
                    />
            </div>
          </div>
        </div>
      </section>
      </>
  );
}; 

export default AboutCampbell;
