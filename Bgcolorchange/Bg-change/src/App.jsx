import { useState } from "react"

function App() {
  const [color,setColor]=useState("yellow")
  return (
    <>
     <div className=" w-full h-screen relative" style={{backgroundColor:color}} >
        <div className="bg-white py-1 px-2  w-min rounded-3xl absolute bottom-7 inset-x-0 mx-auto  gap-2 flex">
        <button className="bg-red-500 py-1 px-2 rounded-3xl text-white" onClick={()=>setColor("red")}>
          Red
        </button>
        <button className="bg-green-500 py-1 px-2 rounded-3xl text-white" onClick={()=>setColor("green")}>
          Green
        </button>
        <button className="bg-pink-500 py-1 px-2 rounded-3xl text-white" onClick={()=>setColor("pink")}>
          Pink
        </button>
        <button className="bg-blue-500 py-1 px-2 rounded-3xl text-white" onClick={()=>setColor("blue")}>
          Blue
        </button>
        <button className="bg-black py-1 px-2 rounded-3xl text-white" onClick={()=>setColor("black")}>
          Black
        </button>
        <button className="bg-white py-1 px-2 rounded-3xl text-Black" onClick={()=>setColor("white")}>
          White
        </button>
        <button className="bg-slate-500 py-1 px-2 rounded-3xl text-white" onClick={()=>setColor("gray")}>
          Gray
        </button>
        <button className="bg-purple-500 py-1 px-2 rounded-3xl text-white" onClick={()=>setColor("purple")}>
          Purple
        </button>
        <button className="bg-violet-500 py-1 px-2 rounded-3xl text-white" onClick={()=>setColor("violet")}>
          Violet
        </button>
        <button className="bg-[brown] py-1 px-2 rounded-3xl text-white" onClick={()=>setColor("brown")}>
          Brown
        </button>
        
        </div>        
      

     </div>
    </>
  )
}

export default App
