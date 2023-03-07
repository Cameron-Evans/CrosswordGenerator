import React from "react";
import RobotImg from "../../assets/img/robot.png";

const AboutEthan = () => {
  return (
    <>
      {/* AboutMember Section  */}
      <section class="aboutMember">
        <div class="container">
          
          <div class="aboutMember-box">
            <h1>About</h1>
            
            <h2>Ethan Haeck</h2>
            
            <h3>What is another project you've worked on that helped you here?</h3>
            <p>
              Besides basic web design, I've never used React before so this is my first experience with non-static web apps.
            </p>
            <h3>What do you hope to take away from this project?</h3>
            <p>
              A nice resume item and a game to play when I'm bored.
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

export default AboutEthan;
