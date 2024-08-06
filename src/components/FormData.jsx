import React, { useCallback, useState } from 'react'
import './FormData.css'
function FormData(props) {
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const titleHandler=(event) =>{
        setTitle(event.target.value);
    }
    const descriptionHandler=(event)=>{
        setDescription(event.target.value);
    }
    const data={
        title2: title,
        description2 :description
}
    const onSubmitHandle=(event)=>{
        event.preventDefault();
        const titles=title;
        console.log(titles);
        props.onAddData(data);
    };

  return (
   <>
   <form onSubmit={onSubmitHandle}>
    <div className="mainForm">
    <div className='inputs'>
    <label>Title</label>
    <input type='text' onChange={titleHandler}/>
    <label>Description</label>
    
    <input type='text' onChange={descriptionHandler}/>
    </div>
    <button className='button' type='submit'>ADD</button>
    </div>
   </form>
      </>
  )
}

export default FormData