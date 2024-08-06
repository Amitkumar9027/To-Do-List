import React from 'react'

function AllList(props) {
  const removeHandler=(index)=>{
    props.removeHandle(index);
  }
  return (
    <ul>
        
          {props.todo.map((event,index) => (
          
            <li key={index}>
              <h2>{event.title}</h2>
              <p>{event.description}</p>
   <button onClick={()=>removeHandler(index)}>Remove</button>
              </li>
            
            
          ))}
        
    </ul>
  )
}

export default AllList