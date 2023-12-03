import React, { useState } from 'react'
export default function TextBox(props) {
    const[text,setText]=useState("Enter the text here");
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value)
    }

    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }
    
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success");
    }

    const handleClearClick=()=>{
        let newText='';
        setText(newText)
        props.showAlert("Cleared text!","success");
    }

    const handleCopyClick=()=>{
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to clipboard!","success");
    }

    const handleRemoveSpaces=()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces!","success");
    }
    

  return (
    <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
<h2>{props.heading}</h2>
<div className="mb-3 my-3">
<textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#181631c2', color:props.mode==='light'?'black':'white'}} rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear the text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy the text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleRemoveSpaces}>Remove extra spaces</button>
</div>
<div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
<h2>Text Summary</h2>
<p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes required to read the above text</p>
<h2>Text Preview</h2>
<p>{text.length>0?text:"Noting to preview!"}</p>
</div>
</>
  )
  
}
