import React, { useEffect, useState } from 'react'

function Github() {
  
     const [username, setUsername] = useState('hiteshchoudhary')
    
     let details = githubinfoloader(username)
    console.log(details)
    const [data, setData] = useState([])
    function githubinfoloader(username){
       
        useEffect(() => {
          fetch(`https://api.github.com/users/${username}`)
          .then((res)=> res.json())
          .then((data)=>{
            // console.log(data)
            setData(data)
     
          })
        }, [username]) } 
    
     
    
     
  return (
    <div className='p-4 text-center bg-teal-500 flex flex-col'>
    <input className='w-40 mx-auto px-3 py-1 rounded' placeholder='Enter Username'  type='text' onChange={(e)=>setUsername(e.target.value)}>
    </input> 
   <div> Follower:{data.followers}</div>
    <img src={data.avatar_url} className='w-fit'></img>
    </div>
  )
}

export default Github