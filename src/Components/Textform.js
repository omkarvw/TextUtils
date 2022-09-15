import React, { useState } from "react";


export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleClearClick = () => {
        // console.log("Uppercase was clicked"+text);
        let newText = '';
        setText(newText);
        props.showAlert("Cleared", "success");
    }
    // const handleDarkModeClick = () => {
    //     // console.log("Uppercase was clicked"+text);
    //     const body = document.querySelector('.rootbody');
    //     body.style.backgroundColor = "black";
    //     body.style.color = "white";
    //     body.style.height = "100%";
    // }
    // const handleLightModeClick = () => {
    //     // console.log("Uppercase was clicked"+text);
    //     const body = document.querySelector('.rootbody');
    //     body.style.backgroundColor = "white";
    //     body.style.color = "black";
    //     body.style.height = "100vh";
    // }

    const handleCopy = () => {
        let text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to Clipboard", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value)
    }
    const [text, setText] = useState('')
    return (
        <>
            <div className="container my-3" style={{
                color: (props.mode === 'light' ? 'black' : 'white')
            }}>
                <h1>
                    {props.heading}
                </h1>
                <div className="mb-3">
                    <textarea className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{
                            backgroundColor: (props.mode === 'light' ? 'white' : '#042743'),
                            color: (props.mode === 'light' ? 'black' : 'white')
                        }}
                        id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2"
                    onClick={handleUpClick}
                >Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 my-2"
                    onClick={handleLoClick}
                >Convert to Lowercase</button>
                <button className="btn btn-danger mx-2 my-2"
                    onClick={handleClearClick}
                >Clear Text</button>
                <button className="btn btn-success mx-2 my-2"
                    onClick={handleCopy}
                >Copy Text</button>
                {/* <button className="btn btn-dark mx-2 my-2"
                    onClick={handleDarkModeClick}
                >Dark Mode</button>
                <button className="btn btn-light mx-2 my-2"
                    onClick={handleLightModeClick}
                >Light Mode</button> */}
            </div>
            <div className="container my-3" style={{
                color: (props.mode === 'light' ? 'black' : 'white')
            }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length - 1} words and {text.length} characters</p>
                <p>{0.008 * (text.split(" ").length - 1)} Minute read</p>
                <p>Number of Sentences = {text.split(".").length - 1}</p>
                <h2>Preview</h2>
                <p className="preview">{text.length > 0 ? text : "Enter something in the textbox above to view it here!!"}</p>
            </div>
        </>
    )
}
// #042743