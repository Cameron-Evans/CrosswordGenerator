import React from "react";
import RobotImg from "../../assets/img/robot.png";

const AboutPhil = () => {
  return (
    <>
      {/* AboutMember Section  */}
      <section class="aboutMember">
        <div class="container">
          
          <div class="aboutMember-box">
            <h1>About</h1>
            
            <h2>Phil Steinke</h2>
            
            <h3>What is another project you've worked on that helped you here?</h3>
            <p>
            In my free time I like to do game development and I have found that parts of that carry over to this project; like creating interactable components that can be reused and the general parent child structure that you build out pages with.
            </p>
            <h3>What do you hope to take away from this project?</h3>
            <p>
            I'm completely new to web design, so I went in to this project hoping to strengthen my understanding of the core design and implementation techniques for creating websites and web applications.
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

export default AboutPhil;
