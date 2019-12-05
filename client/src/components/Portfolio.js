import React from "react";
import "./Portfolio.css";
import noob from "../images/noob.png";
import rapidfire from "../images/rapidfire.png";
import rpg from "../images/rpg.png";

const Portfolio = () => {
  return (
    <div id='portfolio' className='portfolio container'>
      <div className='row'>
        <h2 className='py-4 mx-auto text-white'>Portfolio</h2>
      </div>

      <div className='row'>
        {/* Project 1 */}
        <div className=' col-md-4'>
          <div className='card'>
            <div className='row no-gutters'>
              <div>
                <img src={noob} className='card-img' alt='project' />
              </div>
              <div>
                <div className='card-body'>
                  <h5 className='card-title'>Noob Board</h5>
                  <p className='card-text'>
                    Noob-board is a community board for posting your questions posting and
                    commenting on others' questions. Also share your ideas and new discoveries.
                  </p>
                  <a
                    className='btn btn-primary mr-2'
                    href='https://noob-board.herokuapp.com/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Open
                  </a>
                  <a
                    className='btn btn-secondary'
                    href='https://github.com/dvadz/noob-board'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className=' col-md-4'>
          <div className='card'>
            <div className='row no-gutters'>
              <div>
                <img src={rapidfire} className='card-img' alt='project' />
              </div>
              <div>
                <div className='card-body'>
                  <h5 className='card-title'>Rapidfire</h5>
                  <p className='card-text'>
                    Test your basic Javascript knowledge with this quiz on a short timer.
                  </p>
                  <a
                    className='btn btn-primary mr-2'
                    href='https://dvadz.github.io/TriviaGame/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Open
                  </a>
                  <a
                    className='btn btn-secondary'
                    href='https://github.com/dvadz/TriviaGame'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Project 3 */}
        <div className=' col-md-4'>
          <div className='card'>
            <div className='row no-gutters'>
              <div>
                <img src={rpg} className='card-img' alt='project' />
              </div>
              <div>
                <div className='card-body'>
                  <h5 className='card-title'>RPG Game</h5>
                  <p className='card-text'>
                    Pick your favorite player and defeat the rest of them.
                  </p>
                  <a
                    className='btn btn-primary mr-2'
                    href=' https://dvadz.github.io/unit-4-game/'
                    target='_blank'>
                    Open
                  </a>
                  <a
                    className='btn btn-secondary'
                    href='https://github.com/dvadz/unit-4-game'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
