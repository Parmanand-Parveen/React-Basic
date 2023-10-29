import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  function subtractValue(){
    if(count<=0){
        let msg = "You can't go below 0"
        let no = document.querySelector(".no")
        no.innerHTML = msg
        setTimeout(() => {
          no.innerHTML = ""
        }, 5000);

    }
    else
    setCount(count-1)
  }
  function addValue(){
    if(count>=20){
        //  alert("You can't go above 20");
     let msg = "You can't go above 20"
     let no = document.querySelector(".no")
     no.innerHTML = msg
     setInterval(() => {
      no.innerHTML = ""
     }, 5000);
    }
    else
    setCount(count+1)
  }


  return (
    <>
    <p className='no'></p>
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
