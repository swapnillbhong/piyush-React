import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let counter = 15;

  const addValue = () =>{
    counter = counter + 1; 
  }

  return (
    <>
      <h1>Count : {counter}</h1>
      <button  onClick={addValue}>increase Values</button>
      <button>Decrease Values</button>
    </>
  )
}

export default App
