// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    }, 2000)
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#404040';
      showAlert('Dark mode enabled','Success');
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled','Success');
    }
  }
  return (
  <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container">
        {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}
            {/* <Route exact path="/" element={<TextForm heading="Enter the heading to analyze" mode={mode} showAlert={showAlert}/>} /> */}
        {/* </Routes> */}
        <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
      </div>
    {/* </Router> */}
  </>
  );
}

export default App;
