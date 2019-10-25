import React from "react";
import "./Portfolio.css";
import noob from "../images/noob.png";
import rapidfire from "../images/rapidfire.png";
import rpg from "../images/rpg.png";

const Portfolio = () => {
  return (
    <div id='portfolio' className='portfolio'>
      <h2 className='p-4 text-center'>Portfolio</h2>

      {/* Project 1 */}
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-sm-4'>
            <img src={noob} className='card-img' alt='project' />
          </div>
          <div className='col-sm-8'>
            <div className='card-body'>
              <h5 className='card-title'>Noob Board</h5>
              <p className='card-text'>
                Noob-board is a community board for posting your questions posting and commenting on
                others' questions. Also share your ideas and new discoveries.
              </p>
              <a
                className='btn btn-primary'
                href='https://noob-board.herokuapp.com/'
                target='_blank'>
                Open
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-sm-4'>
            <img src={rapidfire} className='card-img' alt='project' />
          </div>
          <div className='col-sm-8'>
            <div className='card-body'>
              <h5 className='card-title'>Rapidfire</h5>
              <p className='card-text'>
                Test your basic Javascript knowledge with this quiz on a short timer.
              </p>
              <a
                className='btn btn-primary'
                href='https://dvadz.github.io/TriviaGame/'
                target='_blank'>
                Open
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-sm-4'>
            <img src={rpg} className='card-img' alt='project' />
          </div>
          <div className='col-sm-8'>
            <div className='card-body'>
              <h5 className='card-title'>RPG Game</h5>
              <p className='card-text'>Pick your favorite player and defeat the rest of them.</p>
              <a
                className='btn btn-primary'
                href=' https://dvadz.github.io/unit-4-game/'
                target='_blank'>
                Open
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
