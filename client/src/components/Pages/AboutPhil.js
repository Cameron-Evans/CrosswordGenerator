import React from "react";
import RobotImg from "../../assets/img/phil-robot.png";

const AboutPhil = () => {
  return (
    <>

      {/* About Section  */}
      <section className="about">
        <div className="container">
          <div className="about-box">
            <h4 id="personh4">Phil Steinke</h4>
            <h2 id="personh2">What is another project you've worked on that helped you here?<span> What do you hope to take away from this project?</span></h2>
            <p>In my free time I like to do game development and I have found that parts of that carry over to this project; like creating interactable components that can be reused and the general parent child structure that you build out pages with.</p>
            <p>I'm completely new to web design, so I went in to this project hoping to strengthen my understanding of the core design and implementation techniques for creating websites and web applications.</p>
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

export default AboutPhil;
