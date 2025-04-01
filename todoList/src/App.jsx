import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/header'
import TodoItems from './Components/todoItem'
import AddButton from './Components/AddButton'
import { CounterComponent } from './Components/CounterComponent'



function App() {
 

  return (
  <main className='main-container '>
    
    <div className='todo-container'>
      <CounterComponent/>
      <Header title="TODO List"/>
      <TodoItems complete={true} text="Weakup"/>
      <TodoItems text="Get Ready for Office"/>
      <TodoItems text="Code"/>
      <TodoItems text="Dinner"/>
      <TodoItems text="Sleep"/>
      <AddButton />
      </div>
  </main>
    
  )
}

export default App
