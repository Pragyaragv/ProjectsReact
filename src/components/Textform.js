import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick = () =>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () =>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleclearClick = () =>{
        // console.log("Upper case was clicked" + text);
        let newText = '';
        setText(newText)
    }
    const getRandomColor = () => {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`
    }
    const colorchange = () => {
        const textarea = document.getElementById('text');
        textarea.style.backgroundColor = getRandomColor();
    }
    
    const textcolor = () => {
        const textarea = document.getElementById('text');
        textarea.style.color = getRandomColor();
    }
    const handleOnChange = (event) => {
        
        // console.log("on change");
        setText(event.target.value) 
    }
    const [text, setText] = useState('');

    const countWords = (text) => {
        const words = text.trim().split(/\s+/)
        return words[0] ===""?0:words.length
    }
return (
    <>
<div className='constainer my-3'style={{color:props.mode==='dark'?'white':'black'}}> 
    <h1>{props.heading}</h1>
    <div className ="mb-3">
<label htmlFor="text" className="form-label my-4">Click on different buttons to analyze your text</label>
<textarea className="form-control" value = {text}  onChange= {handleOnChange} style = {{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'black'}}id="text" rows="8"></textarea>
</div>
<button className='btn btn-primary me-4' onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-primary me-4' onClick={handleLowClick}>Convert to Lowercase</button>
<button className='btn btn-primary me-4' onClick={handleclearClick}>Clear</button>
<button className='btn btn-primary me-4' onMouseOver={colorchange}>Hover here </button>
<button className='btn btn-primary me-4' onClick={textcolor}>text color </button>
{/* <Element.eventListener onMouseOver={colorchange2}>Hover here</Element.eventListener> */}
</div>
<div className='container my-4'>
<h1>Your text summary</h1>
<p>{countWords(text)} words and {text.length} characters</p>
<p> {0.008 * countWords(text)} Minutes read </p>
<h2>Preview</h2>
<p>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>
</div>
    </>
)
}
