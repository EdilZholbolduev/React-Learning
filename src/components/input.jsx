import { useState } from 'react'
import './input.css'

export function Input(){
   const [name, setName] = useState ()
   const [surname, setSurname] = useState()

   
   return(
      <>
      <input className='input' placeholder='Name' value={name} onChange={(event)=>setName(event.target.value)}/>
      <p>{name}</p>
      <input className='input' placeholder='Surname'  value={surname} onChange={(event)=>setSurname(event.target.value)}/>    
      <p>{surname}</p>
      </>
   )
}