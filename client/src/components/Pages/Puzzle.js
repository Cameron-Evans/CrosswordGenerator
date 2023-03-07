import React from "react";
import ClueList from "../Crossword/ClueList.js";
import { generateCrossword } from '../Crossword/CrosswordAlgorithm.js'
import CrosswordPuzzle from "../Crossword/CrosswordPuzzle.js";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CELL_SIZE = 30

/* 
 * pass json from server to results prop
 * pass query from user to query prop
 */
function Puzzle() {
  const [size, setSize] = useState(15)

  const location = useLocation();
  
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


  const word_list = location.state.results.map((element) => {
    return element.word
  })

  if (!word_list || word_list.length < 10) {
    return (
      <section className="about">
        <div className="container">
          <div className="about-box">
            <h2 style={{ textDecorationLine: 'underline' }}>Uh Oh!</h2>
            <h4>We couldn't make a crossword for you.</h4>
            <h1 >Try making your query less specific or use more keywords!</h1>
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
          </div>
        </div>
      </section>)
  }

  const crossword = generateCrossword(size, word_list)

  return (
    <>
      {/* Puzzle Section  */}
      <section className="about">
        <div className="container">
          <div className="about-box">
            <h2 style={{ textDecorationLine: 'underline' }}>{location.state.query}</h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
              <h2 style={{ margin: 5 }}>Size: </h2>
              <button style={{ margin: 10 }} onClick={() => setSize(15)} className="btn-green">15</button>
              <button style={{ margin: 10 }} onClick={() => setSize(20)} className="btn-green">20</button>
              <button style={{ margin: 10 }} onClick={() => setSize(25)} className="btn-green">25</button>
            </div>
            <CrosswordPuzzle crossword={crossword} size={CELL_SIZE} />
            <ClueList clue_list={location.state.results} clue_data={crossword.clue_data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Puzzle;