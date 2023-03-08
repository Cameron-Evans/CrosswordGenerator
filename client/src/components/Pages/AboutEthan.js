import React from "react";
import RobotImg from "../../assets/img/ethan-robot.png";

const AboutEthan = () => {
  return (
    <>

      {/* About Section  */}
      <section className="about">
        <div className="container">
          <div className="about-box">
            <h4 id="personh4">Ethan Haeck</h4>
            <h2 id="personh2">What is another project you've worked on that helped you here?<span> What do you hope to take away from this project?</span></h2>
            <p>Besides basic web design, I've never used React before so this is my first experience with non-static web apps.</p>
            <p>A nice resume item and a game to play when I'm bored.</p>
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

export default AboutEthan;
