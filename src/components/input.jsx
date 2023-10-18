import { useState } from 'react'
import './input.css'

export function Input(){
   // const [name, setName] = useState ()
   // const [surname, setSurname] = useState()
   const [items, setItems] = useState([])
   const [newItem, setNewItem] = useState('')

   const inputContent = (event) => {
     setNewItem(event.target.value)
   }   

   const additionItem = () => {
      if (newItem.trim() !== '') {
        setItems([...items, newItem])
        setNewItem('')
      }
    }

   // return(
   //    <p>
   //    <input className='input' placeholder='Name' value={name} onChange={(event)=>setName(event.target.value)}/>
   //    <p>{name}</p>
   //    <input className='input' placeholder='Surname'  value={surname} onChange={(event)=>setSurname(event.target.value)}/>    
   //    <p>{surname}</p>
   //    </>
   // )


   // Lesson 3 React learning |making a simple to do table|


   return (
    <>
       <input className='input'type="text" placeholder="idea" value={newItem} onChange={inputContent}/>
        
         <button className='btn' onClick={additionItem} >Add</button>
       <div className='response'>
         <ul>
            {items.map((item, index) => (
               <li key={index}>{item}</li>
               ))
            }
         </ul>
       </div>
    </>
   )
}