import './App.css';
import useWordHook from './hooks/useWordHook';


function App() {

    const {textBoxRef,
          text,
          handleChange,
          isTimeRunning,
          timeRemaining,
          startGame,
          wordCount} = useWordHook()
 
  console.log(text)
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
            ref = {textBoxRef}
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