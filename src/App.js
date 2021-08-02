import './App.css';

import React,{useState,useEffect} from "react"

function App() {
  const STARTING_TIME = 5
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)

    
  function handleChange(e) {
      const {value} = e.target
      setText(value)
  }
  
  function startGame(){
    setIsTimeRunning(true)
    setTimeRemaining(STARTING_TIME)
    setText("")
    setWordCount(0)
  }

  function endGame(){
    setIsTimeRunning(false)
    setWordCount(calculateWordCount(text))
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }

useEffect(() => {
  if(isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
          setTimeRemaining(time => time - 1)
      }, 1000)
  } else if(timeRemaining === 0){
      endGame()
  }
}, [timeRemaining,isTimeRunning])


  console.log(text)
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea 
            value ={text}
            onChange ={handleChange}
            disabled ={!isTimeRunning}/>
            <h4>Time reminaing: {timeRemaining}</h4>
            <button 
            onClick={startGame}
            disabled ={isTimeRunning}>Start</button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}

export default App