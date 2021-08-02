import './App.css';

import React,{useState} from "react"

function App() {
  const [text, setText] = useState("")
    
  function handleChange(e) {
      const {value} = e.target
      setText(value)
  }

  console.log(text)
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea 
            value ={text}
            onChange ={handleChange}/>
            <h4>Time reminaing: ???</h4>
            <button>Start</button>
            <h1>Word count: ???</h1>
        </div>
    )
}

export default App