import React from "react";
import RobotImg from "../../assets/img/cameron-robot.png";

const AboutCameron = () => {
  return (
    <>

      {/* About Section  */}
      <section className="about">
        <div className="container">
          <div className="about-box">
            <h4 id="personh4">Cameron Evans</h4>
            <h2 id="personh2">What is another project you've worked on that helped you here?<span> What do you hope to take away from this project?</span></h2>
            <p>Another project I've worked on is my senior project, a Peer to Peer search engine called deroute! As far as we know, it's the first fully distributed peer to peer search engine out there. It also uses the fastText library so many of the same problems with CrosswordGen popped up with that project.</p>
            <p>I'm hoping this project gives me a nice resume piece and something neat I can show my grandma.</p>
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

export default AboutCameron;
