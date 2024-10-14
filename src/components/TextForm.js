import React, { useState } from "react";

export default function TextForm(props) {
  const handleupclick = () => {
    // console.log("uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    props.showAlert("Converted to uppercase successfully","success")
    setText(newText);
  };

  const handleloclick = () => {
    // console.log("uppercase was clicked"+ text);
    let newText = text.toLowerCase();
    props.showAlert("Converted to Lowercase successfully","success")
    setText(newText);
  };

  const handleclclick = () => {
    // console.log("uppercase was clicked"+ text);
    let newText = "";
    props.showAlert("Cleraed the text successfully","success")
    setText(newText);
  };

  const handleonchange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied the text successfully","success")
  }
  const extractEmails = () => {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const foundEmails = text.match(emailRegex);
    return foundEmails ? foundEmails : [];
    props.showAlert("Extracted the Emails successfully","success")
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed the spaces from text successfully","success")
  }
 
  const [text, setText] = useState('');
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'grey':'white', Color: props.mode==='dark'?'white':'#042743'}}id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleupclick}>
          convert to Uppercase
        </button>
        <button className="btn btn-success mx-2" onClick={handleloclick}>
          convert to Lowercase
        </button>
        <button className="btn btn-success mx-2" onClick={handleclclick}>
          clear text
        </button>
        <button className="btn btn-success mx-2" onClick={handleCopy}>copy Text</button>
        <button className="btn btn-success mx-2" onClick={extractEmails}>Extract Emails</button>
        <button className="btn btn-success mx-2" onClick={handleExtraSpaces}>Extra spaces</button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h4>Your Word Counter</h4>
        <p>
          {text.split(" ").length}
         Words {text.length} and Characters
        </p>
        <p>
          {0.008 * text.split(" ").length}
          Minutes Read
        </p>
        
        <h4>Extracted Emails</h4>
        <ul>
          {extractEmails().length > 0 ? (
            extractEmails().map((email, index) => <li key={index}>{email}</li>)
          ) : (
            <p>No emails found</p>
          )}
        </ul>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Enter something in the textbox above to preview here"}</p>
      </div>
    </>
  );
}
