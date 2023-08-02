import React,{useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState('')
    const handleUpClick = ()=>{
        let upperText = text.toUpperCase();
        setText(upperText);
    }
    const handleDownClick = ()=>{
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleClear = ()=>{
        setText('');
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        alert('Copied')
    }
    let handleOnChange = (event)=>{
        setText(event.target.value)
    }
  return (
    <>
        <div className="container">
            <div className="inner-container">
                <div className="form">
                    <h1>Enter the text to analyze</h1>
                    <textarea className={`textArea_${props.mode}`} name="" id="" value={text} onChange={handleOnChange} cols="70" rows="8"></textarea>
                    <div className="buttonArea">

                    <button className={` btn_${props.mode} btn_${props.red} btn_${props.yellow} btn_${props.green}`} onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className={` btn_${props.mode} btn_${props.red} btn_${props.yellow} btn_${props.green}`} onClick={handleDownClick}>Convert to Lowercase</button>
                    <button className={` btn_${props.mode} btn_${props.red} btn_${props.yellow} btn_${props.green}`} onClick={handleExtraSpaces}>Remove extra spaces</button>
                    <button className={` btn_${props.mode} btn_${props.red} btn_${props.yellow} btn_${props.green}`} onClick={handleCopy}>Copy to Clipboard</button>
                    <button className={` btn_${props.mode} btn_${props.red} btn_${props.yellow} btn_${props.green}`} onClick={handleClear}>Clear</button>
                    </div>
                </div>
                
            </div>
            <div className={`inner-container-2 inner-container-2_${props.mode} inner-container-2_${props.red}`}>
                    <h1>Your Words Summary</h1>
                    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
                    {/* <p>{text.trim().length<=0?0:text.trim().split(" ").splice('/n').length} words and {text.length} Characters</p> */}
                    <p>{0.008 * (text.split(/\s+/).filter((element)=>{return element.length!==0}).length)} Minutes read</p>
                    <h2>Preview</h2>
                    <p className='previewText'>{text.length>0?text:"Enter something to preview here"}</p>
            </div>
        </div>
    </>
  )
}
