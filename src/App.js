import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import React from "react";
import {
  BrowserRouter as Router,
  Routes, // Use Routes instead of Switch for React Router v6+
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils - Dark mode";
//       // setInterval (()=>{
//       //   document.title ='Textutils is a Amazing Mode';
//       // }, 2000);
//       // setInterval (()=>{
//       //   document.title ='Install Textutils Now';
//       // }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = "Textutils - Light mode";
    }
  };

  return (
    <>
     {/* <Router>
     <Navbar tittle="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert}/>
     <div className="container my-3">
       <Switch> 
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          </Route>
        </Switch>  
        </div>
      </Router> */}
      <Router>
        <Navbar tittle="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes> {/* Use Routes instead of Switch */}
            <Route path="/about" element={<About />} /> {/* Use element prop */}
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </> 
  );
}

export default App;
      