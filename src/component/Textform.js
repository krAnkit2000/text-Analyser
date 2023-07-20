//  import React from 'react'
//use hooks
import React, { useState } from 'react'



export default function TextForm(props) {

    
    
   //for uppercase 
    const handleUpClick=()=>{
      //  console.log("upper case was clicked");
        let newtext= text.toUpperCase();
        setText(newtext)
    }
//for lower case 
const handleloClick=()=>{
    //  console.log("upper case was clicked");
      let newtext= text.toLowerCase();
      setText(newtext)
  }

  //for clear text
  const handleClearClick=()=>{
    //  console.log("upper case was clicked");
      let newtext= "";
      setText(newtext)
  }

    const handleOnChange=(event)=>{
       // console.log("Onchange")
        setText(event.target.value);
    }

 const [text, setText] = useState("");

  return (
 
    <>
   <div className='container my-2'>
   <h4>{props.heading} </h4>
    <div className="mb-3">
    
    <textarea className="form-control"  value={text}  onChange={handleOnChange} id="mybox" rows="7"></textarea>
    
  </div>
  <button className="btn btn-primary " onClick={handleUpClick}>UPPERCASE</button>
  <button className="btn btn-primary mx-3" onClick={handleloClick}>Lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
  
  </div>

  <div className="container my-3">
    <h4>Your Text Summary</h4>
    <p>{text.split(" ").length} Words And {text.length} charecters</p>
    <h4>Your read time </h4>
    <p>{0.008* text.split(" ").length} Minutes </p>
    <h4>Preview</h4>
    <p>{text}</p>
  </div>
  </>
  );
}
