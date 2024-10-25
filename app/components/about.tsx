import React from 'react'

interface childcomponent
{
    name:string,
    rollno:number,
    day:string
}

function Card(child:childcomponent) {
  return (
    <div>
        
       
        
      
     <div className='text-3xl bold max-w-sm mx-auto bg-cyan-100	border rounded-lg shadow-md overflow-hidden mt-16 pl-4 pt-5 border-double'> 
        <br />

    <h1 className='text-sky-700	' >Name: {child.name}</h1>
        <br />
       
        <h1 className='text-sky-700	'>Rollno: {child.rollno}</h1>
        <br />
        
        <h1 className='text-sky-700	'>Day: {child.day}</h1>
       </div>
       
        
       
        
    </div>
  )
}

export default Card
