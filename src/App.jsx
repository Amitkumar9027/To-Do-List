import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FormData from './components/FormData'
import './App.css'
import AllList from './components/AllList'

function App() {
  const [data,setData]=useState([]);
const getDataFromChild=(gettedData) =>{
console.log("in app.js")
console.log(gettedData)
setData((prevTitle)=>[...prevTitle, {title :gettedData.title2,description:gettedData.description2}])
console.log(data)

}
const removeHandler= (index)=>{
  const newData=data.filter((a,i)=>i!==index);
  setData(newData);
}


  return (
   <>
   <FormData onAddData={getDataFromChild}/>
   <AllList todo={data} removeHandle={removeHandler}/>
   </>
  )
}

export default App
