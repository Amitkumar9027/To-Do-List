import React from 'react'
import './FormData.css'
function AllList(props) {
  const removeHandler=(index)=>{
    props.removeHandle(index)
  }
  return (
    <ul>
        
          {props.todo.map((event,index) => (
          
            <li key={index} className='listLi'>
              <div className='listLiDiv'>
              <h2>{event.title}</h2>
              <p>{event.description}</p>
   <button onClick={()=>removeHandler(index)}>Remove</button>
   </div>
              </li>
            
            
          ))}
        
    </ul>
  )
}

export default AllList