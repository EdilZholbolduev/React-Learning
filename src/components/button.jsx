import { useState } from 'react'
import './button.css'
import {Input} from './input'

export function Button(){ 

   const [test, setTest] = useState("submit")
   const [good, setGood] = useState('')
   return (
      <>
      <button className='btn' 
      onClick={()=>{
         if(test === "submit"){
            setTest("add new")
            setGood("✅✅✅")
         }else if(test === "add new"){
            setTest("submit")
            setGood("")
         }
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