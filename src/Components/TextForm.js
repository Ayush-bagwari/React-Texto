import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleUpClick = ()=>{
    // console.log("neend de nashe");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to uppercase', 'Success');
  }
  const handleLoClick =()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowercase', 'Success');
  }
  const handleOnChange = (e)=>{
    // console.log("neend de nashe change");
    setText(e.target.value);
  }
  const textToCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    // props.showAlert('Text', 'Success');
  }
  function textToSpeech(){
    const Speech= new SpeechSynthesisUtterance();
    const message= document.getElementById("myBox").value;
    Speech.lang='eng';
    Speech.text= message;
    window.speechSynthesis.speak(Speech);
  }
  const textClear = ()=>{
    setText('');
    props.showAlert('Text Cleared', 'Success');
  }

  return (
    <>
      <div className="container my-2" style={{color: props.mode==='dark'?'white':"black"}}>
          <h3>{props.heading}</h3>
          <div className="mb-3">
              {/* <label for="myBox" className="form-label">Example textarea</label> */}
              <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#404040':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" onChange={handleOnChange} value={text} rows="3"></textarea>
          </div>
          <button className="btn btn-primary mx-2" style={{background: props.mode==='dark'?'#778899': ''}} onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-2" style={{background: props.mode==='dark'?'#778899': ''}} onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-2" style={{background: props.mode==='dark'?'#778899': ''}} onClick={textClear}>Clear</button>
          <button className="btn btn-primary mx-2" style={{background: props.mode==='dark'?'#778899': ''}} onClick={textToCopy}>Copy Text</button>
          <button className="btn btn-primary mx-2" style={{background: props.mode==='dark'?'#778899': ''}} onClick={textToSpeech}>TextSpeech</button>
      </div>
      <div className="container my-2" style={{color: props.mode==='dark'?'white':"black"}}>
        <h4>Your text summary</h4>
        <p>Your text has {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:'Enter something to preview it'}</p>
      </div>
    </>
  )
}
