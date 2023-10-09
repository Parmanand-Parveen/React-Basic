import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  function subtractValue(){
    if(count>0){
        setCount(count-1)
    }
  }
  function addValue(){
    if(count<20){
        setCount(count+1)
    }
  }


  return (
    <>
    <button onClick={addValue}>
      Add value
    </button>
     <div>
      Count:{count}
     </div>
     <button onClick={subtractValue}>Subtract Value</button>
    </>
  )
}

export default App
