import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { Mybutton } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <br></br>
    <Mybutton />
  </StrictMode>,
)
