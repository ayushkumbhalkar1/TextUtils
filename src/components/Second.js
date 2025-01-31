import React, { useState } from "react";

export default function Second({ heading = "enter heading here", showAlert }) {
  const uppercaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    showAlert("converted to uppercase!", "success");
  };
  const lowercaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    showAlert("converted to lowercase!", "success");
  };
  const clearClick = () => {
    let newText = "";
    setText(newText);
    showAlert("text cleared!", "success");
  };
  const copyClick = () => {
    var text = document.querySelector("#myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    showAlert("copied to clipboard!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{heading}</h1>
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="myBox"
            rows="6"
          ></textarea>
          <button
            type="button"
            className="btn btn-primary my-2 mx-1"
            onClick={uppercaseClick}
          >
            Convert to uppercase
          </button>
          <button
            type="button"
            className="btn btn-primary my-2 mx-1"
            onClick={lowercaseClick}
          >
            Convert to lowercase
          </button>
          <button
            type="button"
            className="btn btn-primary my-2 mx-1"
            onClick={clearClick}
          >
            Clear text
          </button>
          <button
            type="button"
            className="btn btn-primary my-2 mx-1"
            onClick={copyClick}
          >
            Copy text
          </button>
        </div>
        <div className="container">
          <h2>Your text summary</h2>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} Minutes Read</p>
          <h2>Preview</h2>
          <p>
            {text.length > 0
              ? text
              : "Enter Something in the textbox above to preview it here"}
          </p>
        </div>
      </div>
    </>
  );
}
