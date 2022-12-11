import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = ()=>{
    if(mode==="dark"){
      setMode("light");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("Success","Mode changed to Light");
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor="#636464";
      document.body.style.color="white";
      showAlert("Success","Mode changed to Dark");
    }
  }

  const showAlert = (type,message)=>{
      setAlert({
        type:type,
        message:message
      })

      setTimeout(()=>{
        setAlert(null);
      },1500);
  }
 
  return (
    <>
    <BrowserRouter>
    <Navbar title="Text Analyzer" mode={mode} toggleMode={toggleMode}/>
    <Alert alert = {alert}/>
    <Routes>
        <Route exact path="/" element={
          <div className="container-fluid">
            <TextForm heading = "Enter the Text below:" upperCase = "Convert to UpperCase" lowerCase = "Convert to LowerCase" heading1 = "Summary" clear = "Clear Text" mode={mode} showAlert = {showAlert}/>
          </div>
        } />
        <Route exact path="about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
