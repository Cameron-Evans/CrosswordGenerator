import React from "react";
import RobotImg from "../../assets/img/robot.png";

const AboutCameron = () => {
  return (
    <>
      {/* AboutMember Section  */}
      <section class="aboutMember">
        <div class="container">
          
          <div class="aboutMember-box">
            <h1>About</h1>
            
            <h2>Cameron Evans</h2>
            
            <h3>What is another project you've worked on that helped you here?</h3>
            <p>
            Another project I've worked on is my senior project, a Peer to Peer search engine called deroute! As far as we know, it's the first fully distributed peer to peer search engine out there. It also uses the fastText library so many of the same problems with CrosswordGen popped up with that project.
            </p>
            <h3>What do you hope to take away from this project?</h3>
            <p>
            I'm hoping this project gives me a nice resume piece and something neat I can show my grandma.
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

export default AboutCameron;
