import React from "react";
import RobotImg from "../../assets/img/daniel-robot.png";

const AboutDaniel = () => {
  return (
    <>

      {/* About Section  */}
      <section className="about">
        <div className="container">
          <div className="about-box">
            <h4 id="personh4">Daniel Ho</h4>
            <h2 id="personh2">What is another project you've worked on that helped you here?<span> What do you hope to take away from this project?</span></h2>
            <p>One of my internships required work to be completed in React Native, so the work I did there really helped me hit the ground running faster.</p>
            <p>I was hoping to be able to increase my experience with react and create another resume stuffer.</p>
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

export default AboutDaniel;
