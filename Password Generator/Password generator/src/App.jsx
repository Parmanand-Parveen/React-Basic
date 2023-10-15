
import { useState ,useCallback, useEffect, useRef  } from 'react'
import './App.css'

function App() {
   const [length, setLength] = useState(8);
   const [upperCaseAllowed, setUpperCaseAllowed] = useState(true)
   const [lowerCaseAllowed, setLowerCaseAllowed] = useState(false)
   const [numberAllowed, setNumberAllowed] = useState(false)
   const [symbolAllowed, setSymbolAllowed] = useState(false)
   const [Password, setPassword] = useState("")

   const passwordRef = useRef(null)


   let PasswordGenerator = useCallback(() => {
      let pass = "" 
      let str = ""

      if(upperCaseAllowed) str+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      
      if(lowerCaseAllowed) str+= "abcdefghijklmnopqrstuvwxyz"
      
      if(numberAllowed)str+= "0123456789"
      
      if(symbolAllowed)str+= "`!@#$%^&*()_+|}{:'<>?/"
      
      for (let i = 1; i <length; i++) {
        let char = Math.floor(Math.random()*str.length+1)
        pass += str.charAt(char)
        
      }
      setPassword(pass)
    },
     [length,upperCaseAllowed,lowerCaseAllowed,numberAllowed,symbolAllowed,setPassword],
   )


     useEffect(() => {
    PasswordGenerator()
   },[length,upperCaseAllowed,lowerCaseAllowed,numberAllowed,symbolAllowed,])


   function copy(){
    passwordRef.current?.select()
    navigator.clipboard.writeText(Password)
    document.querySelector("button").innerHTML = "Copied"
    setTimeout(() => {
      document.querySelector("button").innerHTML="Copy"
      },1000);
   }
  
  return (
    <>
     {/* main div */}
      <div className='min-h-screen h-full w-full flex justify-center items-center bg-black'>
      <div className='p-4 w-[512px] rounded  flex flex-col items-center bg-gray-700 gap-5'>
          <div className='text-white'>Password Generator</div>
          {/* Password field */}
          <div className='rounded overflow-hidden w-full'>
            <input type='text'
            placeholder='Password'
            className=' p-2 w-4/5 '
              readOnly
              value={Password}
              ref={passwordRef}
              
            />
            <button id="button" onClick={copy} className=' w-1/5 text-white  bg-blue-700 py-2 px-2 hover:bg-blue-800'>
              Copy
            </button>
          </div>
          {/* slider */}
          <div>
            <input 
              type='range'
              min={0}
              max={25}
              value={length}
              onChange={(e)=>{setLength(e.target.value)}}
            />
            <div className='text-white text-lg font-semibold'>Length : {length}</div>
          </div>
          
        <div className=' text-left flex flex-col justify-start p-2 w-full gap-3'>
        {/* Uppercase */}
        <div className='flex items-center gap-2'>
            <input 
              type='checkbox'
              id='uppercase'
              className='h-5 w-5'
              defaultChecked={upperCaseAllowed}
              onChange={()=>{
                setUpperCaseAllowed(prev=>!prev)
              }}
            />
            <label htmlFor='uppercase' className='text-white font-semibold '>Use Uppercase</label>
          </div>
          {/* lowercase */}
          <div className='flex items-center gap-2'>
            <input 
              type='checkbox'
              id='lowercase'
              className='h-5 w-5'
              defaultChecked={lowerCaseAllowed}
              onChange={()=>{
                setLowerCaseAllowed(prev=>!prev)
              }}
            />
            <label htmlFor='lowercase' className='text-white font-semibold '>Use Lowercase</label>
          </div>
          {/* numbe */}
          <div className='flex items-center gap-2'>
            <input 
              type='checkbox'
              id='number'
              className='h-5 w-5'
              defaultChecked={numberAllowed}
              onChange={()=>{
                setNumberAllowed(prev=>!prev)
              }}
            />
            <label htmlFor='number' className='text-white font-semibold '>Use Number</label>
          </div>
          {/* symbol */}
          <div className='flex items-center gap-2'>
            <input 
              type='checkbox'
              id='symbol'
              className='h-5 w-5'
              defaultChecked={symbolAllowed}
              onChange={()=>{
                setSymbolAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='symbol' className='text-white font-semibold '>Use Symbol</label>
          </div> 
        </div>
      </div> 
      </div>

    </>
  )
}

export default App
