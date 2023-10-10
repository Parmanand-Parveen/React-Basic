import React, { useState } from 'react'
import { Cards } from './Cards'




export const Cardcontainer = () => {
 
const  responce =[{
  itemName :"Nirma",
  itemDay: "11",
  itemMonth:"July",
  itemYear: "2005",
  secondname:"Parmanand"
},
{
  itemName :"Nirma2",
  itemDay: "112",
  itemMonth:"July2",
  itemYear: "20052",
  secondname:"Ankit"
},
{
  itemName :"Nirma3",
  itemDay: "113",
  itemMonth:"July3",
  itemYear: "20053",
  secondname:"Saurav"
}] 
  return (
<>
 <div className='flex flex-col items-center justify-center w-5/6 gap-2 bg-yellow-600 p-7'>
  {responce.map( (data,idx) =>{
    return(
      <Cards key={idx} data={data}></Cards>
    )
  })}
 </div>
</>
  )
}

