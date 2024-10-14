   import React, { useState } from 'react';

export default function About() {
  const [myStyle, SetMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
    border: '1px solid white',
  });

  const [btntext, SetBtnText] = useState('Enable Dark Mode'); // Uncomment this

  const togglestyle = () => {
    if (myStyle.color === 'black') {
      SetMyStyle({
        color: 'white',
        backgroundColor: 'black',
      });
      SetBtnText('Enable Light Mode');
    } else {
      SetMyStyle({
        color: 'black',
        backgroundColor: 'white',
      });
      SetBtnText('Enable Dark Mode');
    }
  };

  return (
    <div className='container my-3' style={myStyle}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes.
            </div>
          </div>
        </div>
        <div className="container my-3">
          <button onClick={togglestyle} type="button" className="btn btn-primary">
            {btntext} {/* Use the btntext state */}
          </button>
        </div>
      </div>
    </div>
  );
}
