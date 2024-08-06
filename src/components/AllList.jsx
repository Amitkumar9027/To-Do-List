import React from 'react'

function AllList(props) {
  return (
    <ul>
        
          {props.todo.map((event,index) => (
            <li key={index}>{event}</li>
          ))}
        
    </ul>
  )
}

export default AllList