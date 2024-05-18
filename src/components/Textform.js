import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function Textform(props) {
  const handleupclick = (event) => {
    setText(text.toUpperCase());
  };

  const lowerclick = (event) => {
    setText(text.toLowerCase());
  };

  const handleonchange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const clrclick = (event) => {
    setText('');
  };

  const klrclick = (newColor) => {
    setText(setText.newColor);
  };

  const [text, setText,] = useState("enter text");


  return (
    <>
      <div className='container'>
        <h2>Enter the Text below </h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleonchange} id="mybox" rows="8"></textarea>
        </div>
        <button type="button" className="btn btn-outline-primary mx-1" onClick={handleupclick}>convert to UpperCase</button>
        <button type="button" className="btn btn-outline-primary mx-1" onClick={lowerclick}>convert to lowercase</button>
        <button type="button" className="btn btn-outline-primary mx-1" onClick={clrclick}>clear text</button>
        <button type="button" className="btn btn-outline-primary mx-1" onClick={() => klrclick('green')}>changeclr</button>
      </div>
      <div className={`container my-3 ${props.mode === 'light' ? 'dark' : 'light'}`}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
      </div>
    </>
  );
}
