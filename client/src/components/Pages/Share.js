import React from "react";
import RobotImg from "../../assets/img/share-robot.png";

const Share = () => {
  return (
    <>
      {/* Share Section  */}
      <section class="share">
        <div class="container">
          <div class="share-box">
            <div class="share-text">
              <h4>The Best Crossword Generator</h4>
              <h2>Who doesn't like crosswords? <span>Just share the link.</span></h2>
              <p>
                Click the button below to copy the link to your clipboard.
              </p>
              <div class="share-form">
                <form name="share" method="POST" data-netlify="true">
                  <input type="hidden" name="form-name" value="share" />
                  <div class="share-item">
                    <input
                      type="email"
                      name="Email Address"
                      id=""
                      class="input"
                      placeholder="CROSS43WORD3PUX"
                      required
                    />
                    <input
                      type="submit"
                      value="Copy share link!"
                      class="btn-submit"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div class="share-image">
              <img src={RobotImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Share;
