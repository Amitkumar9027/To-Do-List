import React, { useCallback, useState } from 'react'

function FormData(props) {
    const [title,setTitle]=useState('');
    const titleHandler=(event) =>{
        setTitle(event.target.value);
        console.log(event.target.value);
    }
    const onSubmitHandle=(event)=>{
        event.preventDefault();
        const titles=title;
        console.log(titles);
        props.onAddData(titles);
    };
  return (
   <>
   <form onSubmit={onSubmitHandle}>
    <label>Title</label>
    <input type='text' onChange={titleHandler}/>
    <button type='submit'>ADD</button>
   </form>
   </>
  )
}

export default FormData