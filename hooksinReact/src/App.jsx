
import './App.css'
import { useEffect , useState } from 'react'

// import Mycomponents from './Components/Mycomponents'

import Timer from './Components/Timer'

function App() {

  // const [isVisible, setVisible]= useState(true)
  
  // useEffect(()=>{
  //   console.log("App component is mounting  ...... ")
  // },[])

  return (
    <>
      {/* {isVisible?<Mycomponents/>: <></>} 
      <button onClick={()=> setVisible (!isVisible)}> Toggle</button> */}
      <Timer/>
    </>
  )
}

export default App
