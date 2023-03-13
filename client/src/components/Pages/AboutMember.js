import React from "react";
import RobotImg from "../../assets/img/campbell-robot.png";

const AboutMember = (props) => {
  return (
    <>

      {/* About Section  */}
      <section className="about">
        <div className="container">
          <div className="about-box">
            <h4 id="personh4">{props.member.name}</h4>
            <h2 id="personh2">What is another project you've worked on that helped you here?<span> What do you hope to take away from this project?</span></h2>
            <p>{props.member.answer1}</p>
            <p>{props.member.answer2}</p>
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

export default AboutMember;
