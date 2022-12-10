import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';

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
    <Navbar title="Title" mode={mode} toggleMode={toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container-fluid">
      <TextForm heading = "Text Analyzer" upperCase = "Convert to UpperCase" lowerCase = "Convert to LowerCase" heading1 = "Summary" clear = "Clear Text" mode={mode} showAlert = {showAlert}/>
    </div>
    </>
  );
}

export default App;
