import {useState, useEffect, useRef}  from "react"

function useWordHook(startingTime = 10){

    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(startingTime)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textBoxRef = useRef(null)
      
    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }
    
    function startGame(){
      setIsTimeRunning(true)
      setTimeRemaining(startingTime)
      setText("")
      setWordCount(0)
      textBoxRef.current.disabled = false
      textBoxRef.current.focus()
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

  return {textBoxRef,text,handleChange,isTimeRunning,timeRemaining,startGame,wordCount}

}

export default useWordHook