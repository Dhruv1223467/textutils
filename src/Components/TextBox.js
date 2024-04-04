import React, {useState} from 'react'

export default function TextBox(props) {
    const [text, setText] = useState('');
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleUpClick =()=>{
        setText(text.toUpperCase());
    }
    const handleLoClick =()=>{
        setText(text.toLowerCase());
    }
    const handleSpaceClick =()=>{
        let arr=text.split(" ");
        
        arr = arr.filter(word => word.trim() !== '');
        let str=arr.join(" ");
        setText(str);
  }
  const handleCopyClick =()=>{
    navigator.clipboard.writeText(text);
}
  return (
    <>
    <div className="container">
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className={`form-label ${props.mode ? 'text-black' : 'text-white'}`}>Given below is the area where you will give your text</label>
    <textarea placeholder="Enter your text here"  className={`form-control ${props.mode ? 'bg-white' : 'bg-dark'} ${props.mode ? 'text-black' : 'text-white'} ${props.mode ? 'c1' : 'c2'}`} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
  </div>
  <button type="button" onClick={handleUpClick} className="btn btn-primary mx-2 my-2">Convert to Upper Case</button>
  <button type="button" onClick={handleLoClick} className="btn btn-danger mx-2 my-2">Convert to Lower Case</button>
  <button type="button" onClick={handleSpaceClick} className="btn btn-warning mx-2 my-2">Remove Extra Spaces</button>
  <button type="button" onClick={handleCopyClick} className="btn btn-success mx-2 my-2">Copy to Clipboard</button>
  <h2 className={`my-2 ${props.mode ? 'text-black' : 'text-white'}`}>Text Summary</h2>
  <p className={`${props.mode ? 'text-black' : 'text-white'}`}>{text===""?0:text.split(" ").filter(word => word.trim() !== '').length} words,{text.length} characters</p>
  </div>
  </>
  )
}
