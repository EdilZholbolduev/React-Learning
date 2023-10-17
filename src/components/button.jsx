import { useState } from 'react'
import './button.css'
import {Input} from './input'

export function Button(){ 

   const [test, setTest] = useState("activate")
   const [good, setGood] = useState('')
   return (
      <>
      <button className='btn' 
      onClick={()=>{
      setTest("done!")
      setGood("✅✅✅")
      }
      }>
      {test}
      </button>
      {/* <button className='btn' onClick={()=>{
         setName('Edil')
         setSurname('Zholbolduev')
      }} > info</button> */}

      <div>{good}</div>
      </>
   )
} 