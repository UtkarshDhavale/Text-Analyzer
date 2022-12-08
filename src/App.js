import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'

function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = ()=>{
    if(mode==="dark"){
      setMode("light");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor="#636464";
      document.body.style.color="white";
    }
  }

  return (
    <>
    <Navbar title="Title" mode={mode} toggleMode={toggleMode}/>
    <div className="container-fluid">
      <TextForm heading = "Text Analyzer" upperCase = "Convert to UpperCase" lowerCase = "Convert to LowerCase" heading1 = "Summary" clear = "Clear Text" mode={mode}/>
    </div>
    </>
  );
}

export default App;
