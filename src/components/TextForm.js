import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");

    const handleOnChange = (event) =>{
        setText(event.target.value);
        //console.log("On Change Handler Call");
    }

    const convertUpperCase = ()=>{
        if(text.length===0){
            alert("Please Enter the Text!!");
            return 0;
        }
        setText(text.toUpperCase());
        props.showAlert("Success","Converted to Uppercase");
        //console.log("On Click Handler Call");
    }

    const convertLowercase = ()=>{
        if(text.length===0){
            alert("Please Enter the Text!!");
            return 0;
        }
        setText(text.toLowerCase());
        props.showAlert("Success","Converted to Lowercase");
        //console.log("On Click Handler Call");
    }

    const clearText = ()=>{
        setText("");
        props.showAlert("Success","Text cleared");
        //console.log("On Click Handler Call");
    }

    const CopyText = ()=>{
        if(text.length===0){
            alert("Please Enter the Text!!");
            return 0;
        }
        navigator.clipboard.writeText(text);
        props.showAlert("Success","Copy to Clipboard");
    }

    const removeExtraSpaces = ()=>{
        if(text.length===0){
            alert("Please Enter the Text!!");
            return 0;
        }
        setText(text.split(/[ ]+/).join(" "));
        props.showAlert("Success","Extra Space Removed");
    }

  return (
    <>
    <div className="container ">
        <div className="container my-3">
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className={`btn btn-${(props.mode==="dark")?"dark":"primary"} mx-1 my-1`} onClick={convertUpperCase}>{props.upperCase}</button>
            <button className={`btn btn-${(props.mode==="dark")?"dark":"primary"} mx-1 my-1`} onClick={convertLowercase}>{props.lowerCase}</button>
            <button className={`btn btn-${(props.mode==="dark")?"dark":"primary"} mx-1 my-1`} onClick={clearText}>{props.clear}</button>
            <button className={`btn btn-${(props.mode==="dark")?"dark":"primary"} mx-1 my-1`} onClick={CopyText}>Copy Text</button>
            <button className={`btn btn-${(props.mode==="dark")?"dark":"primary"} mx-1 my-1`} onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        </div>

        <div className="container my-2">
            <u><h4>{props.heading1}</h4></u>
            <p>Your text is having {(text.trim().length===0)?0:text.trim().split(/\s+/).length} Words and {text.length} characters</p>
            <p>{0.008*(text.trim().length)} minutes read</p>
            <u><h4>Preview</h4></u>
            <p>{(text.length===0)?"Enter something in Textbox!!":text}</p>
        </div>
    </div>
    </>
  )
}
