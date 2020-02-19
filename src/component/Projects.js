import React from "react";

function Projects() {
  return (
    <div className='container'>
      <div
        id='carousel-example-2'
        className='carousel slide carousel-fade'
        data-ride='carousel'
      >
        <ol className='carousel-indicators'>
          <li
            data-target='#carousel-example-2'
            data-slide-to='0'
            className='active'
          ></li>
          <li data-target='#carousel-example-2' data-slide-to='1'></li>
          <li data-target='#carousel-example-2' data-slide-to='2'></li>
        </ol>

        <div className='carousel-inner' role='listbox'>
          <div className='carousel-item active'>
            <div className='view'>
              <img
                className='d-block w-100'
                src='dadaoo.png'
                alt='First slide'
              ></img>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='view'>
              <img
                className='d-block w-100'
                src='udacity.png'
                alt='Second slide'
              ></img>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='view'>
              <img
                className='d-block w-100'
                src='horla.png'
                alt='Third slide'
              ></img>
            </div>
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#carousel-example-2'
          role='button'
          data-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carousel-example-2'
          role='button'
          data-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    </div>
  );
}

export default Projects;
