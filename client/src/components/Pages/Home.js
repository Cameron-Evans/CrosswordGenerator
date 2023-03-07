import React from "react";
import robotImg from "../../assets/img/robot.png";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
  event.preventDefault()
  const keyword = event.target.keyword.value
  fetch(`http://localhost:52093/GenCrossword/${keyword}`)
    .then(res => res.json())
    .then(array => 
      navigate('/puzzle', {
        state: {
          query: keyword,
          results: array,
        }
      })
    )
  }

  return (
    <>
      <header className="header" id="header">
        <div className="container">
          <div className="header-box">
            <div className="header-text">
              <h1>The Crossword Generator</h1>
              <h4>
                Use our crossword generator to generate the crossword puzzle of
                your dreams.
              </h4>
            </div>
            <div className="header-form">
              <form onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="header" />
                <div className="header-item">
                  <input
                    type="text"
                    name="keyword"
                    id=""
                    className="input"
                    placeholder="Enter a keyword"
                    required
                  />
                  <input
                    type="submit"
                    value="Make your puzzle!"
                    className="btn-submit"
                  />
                </div>
              </form>
            </div>
            <div className="header-image">
              <img src={robotImg} alt="Fiverr Reviews logogenius5" />
            </div>
          </div>
        </div>
      </header>
      {/* Detail Section */}
      <section className="detail">
        <div className="container">
          <div className="detail-box">
            <div className="detail-text">
              <h2>Word Database</h2>
              <p>
                Utilizing the open-source <i>fast</i>Text library, puzzle answers can
                be generated by finding words that are related to the provided keyword. 
              </p>
              <p>
                <i>fast</i>Text even works with 157 languages!
              </p>
              <div className="detail-button-box">
                <div className="detail-button">
                  <a href="#" className="btn-green">
                    Create
                  </a>
                </div>
                <div className="detail-button">
                  <a href="https://fasttext.cc/" className="btn-blank">
                    Learn More &#8594;
                  </a>
                </div>
              </div>
            </div>
            <div className="detail-image">
              <img src={robotImg} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Detail 2 Section */}
      <section className="detail2">
        <div className="container">
          <div className="detail2-box">
            <div className="detail2-image">
              <img src="img/robot.png" alt="" />
            </div>
            <div className="detail2-text">
              <h2>Clues Database</h2>
              <p>
                We use the cryptics.georgeho.org dataset to get clues for your
                crossword puzzle. After generating the answers to your crossword,
                we search through this database to match each answer with a clue!
              </p>
              <p>
                This dataset includes over <b>half a million</b> clues collected over
                12 years!
              </p>
              <div className="detail2-button-box">
                <div className="detail2-button">
                  <a href="#" className="btn-green">
                    Create
                  </a>
                </div>
                <div className="detail2-button">
                  <a href="https://cryptics.georgeho.org/" className="btn-blank">
                    Learn More &#8594;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
