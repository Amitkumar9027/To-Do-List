import React, { useCallback, useState } from 'react'

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
    <label>Title</label>
    <input type='text' onChange={titleHandler}/>
    <input type='text' onChange={descriptionHandler}/>
    <button type='submit'>ADD</button>
   </form>
      </>
  )
}

export default FormData