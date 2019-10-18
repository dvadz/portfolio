import React from "react";
import "./Portfolio.css";
import noob from "../images/noob.png";

const Portfolio = () => {
  return (
    <div id='portfolio' className='portfolio'>
      <h2 className='p-4 text-center'>Portfolio</h2>

      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-sm-4'>
            <img src={noob} className='card-img' alt='project' />
          </div>
          <div className='col-sm-8'>
            <div className='card-body'>
              <h5 className='card-title'>Noob Board</h5>
              <p className='card-text'>
                Noob-board is an application where users can ask questions that are related to
                programming. In addition, users can comment on previos posts with answers. This app
                aims to provide its users with answers, knowledge and more ideas related to coding.
              </p>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='row no-gutters'>
            <div className='col-sm-4'>
              <img src='https://via.placeholder.com/150' className='card-img' alt='project' />
            </div>
            <div className='col-sm-8'>
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>
                  Noob-board is an application where users can ask questions that are related to
                  programming. In addition, users can comment on previos posts with answers. This
                  app aims to provide its users with answers, knowledge and more ideas related to
                  coding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
