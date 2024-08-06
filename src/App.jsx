import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FormData from './components/FormData'
import './App.css'
import AllList from './components/AllList'

function App() {
  const [title,setTitle]=useState([]);
const getDataFromChild=(gettedData) =>{
console.log("in app.js")
setTitle((prevTitle)=>[...prevTitle, gettedData])
console.log(title)

}
  return (
   <>
   <FormData onAddData={getDataFromChild}/>
   <AllList todo={title}/>
   </>
  )
}

export default App
