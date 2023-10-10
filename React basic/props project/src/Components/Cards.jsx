import React, { useState } from 'react'


export const Cards = (props) => {
    const [name,setName] = useState(props.data.itemName)
   
    function changeName(){
        setName(props.data.secondname)
    }
  return (
     <>
        <div className='bg-sky-500  flex justify-between px-5 py-2 items-center w-4/6'>
        <p >{name}</p>
        <div>
        <p>{props.data.itemDay}</p>
        <p>{props.data.itemMonth}</p>
        <p>{props.data.itemYear}</p>
        </div>
        <button onClick={changeName}>Click Me</button>
        </div>
     </>
  )
}
