import React, { useState } from 'react'
// states are the state of existence of a react app
// react hooks help in the use of class based components -> state and others, without the use of classes


export default function Textform(props) {
  const [text, setText] = useState('Enter the text here')
  // text = 'Enter the text' // wrong way to change the state of text
  // setText('Enter the text content here') // correct way to change the state of text


  // ONCLICK FUNCTIONS
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  }

  const onClickClear = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Cleared", "success");
  }

  // promise function to handle the clipboard copying function
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        props.showAlert("Text copied to clipboard", "success");
      })
      .catch(err => console.log(`Could not copy text, ${err}`));
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces cleared", "success");
  }


  // UTILITY FUNCTIONS
  const countWords = (str) => {
    const trimmedStr = str.trim();
    if (trimmedStr === '') return 0;
    return trimmedStr.split(/\s+/).length;
  };


  // STYLES
  const textAreaStyle = {
    backgroundColor: props.mode === 'dark' ? '#1b1f22' : 'white',
    color: props.mode === 'dark' ? '#dee2e6' : 'black'
  }

  return (
    <>

      <div className="container">

        <h1 style={{ color: props.mode === 'dark' ? '#dee2e6' : 'black' }}>{props.header}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" rows={3} value={text} onChange={(event) => setText(event.target.value)}
            style={textAreaStyle}/>
        </div>

        <button className={`btn btn-primary mx-2 my-2 ${props.mode === 'dark' ? 'btn-custom-dark' : 'btn-custom-light'}`} onClick={handleUpClick}>
          Convert to uppercase
        </button>

        <button className={`btn btn-success mx-2 my-2 ${props.mode === 'dark' ? 'btn-custom-dark' : 'btn-custom-light'}`} onClick={handleLoClick} >
          Convert to lowercase
        </button>

        <button className={`btn btn-info mx-2 my-2 ${props.mode === 'dark' ? 'btn-custom-dark' : 'btn-custom-light'}`} onClick={onClickClear}>
          Clear text
        </button>

        <button className={`btn btn-warning mx-2 my-2 ${props.mode === 'dark' ? 'btn-custom-dark' : 'btn-custom-light'}`} onClick={copyToClipboard}>
          Copy to clipboard
        </button>

        <button className={`btn btn-secondary mx-2 my-2 ${props.mode === 'dark' ? 'btn-custom-dark' : 'btn-custom-light'}`} onClick={handleExtraSpaces}>
          Delete extra spaces
        </button>

      </div>


      {/* edit the styles of the preview text div */}
      <div className="container my-5" style={{ color: props.mode === 'dark' ? '#dee2e6' : 'black' }} >
        <h1>Your text summary</h1>
        <p>{countWords(text)} words and {text.length} characters</p>
      </div>

    </>
  );
}
