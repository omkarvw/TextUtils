// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import TextForm from './Components/Textform';
// import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alerts';

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // document.body.style.color = 'white';
      showAlert("Dark mode enabled.", "primary");
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // document.body.style.color = 'black';
      showAlert("Light mode enabled.", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            <TextForm showAlert={showAlert} heading="Enter the text to be analyzed" mode={mode} />
            {/* <Route path="/about" element={<About />} /> */}
          {/* </Routes> */}

          {/* // We have made changes in the index.html for enabling dark mode all over the body.We added class 'bodyroot' in body tag of index.html */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
