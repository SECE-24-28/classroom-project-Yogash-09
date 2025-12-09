import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Display from './assets/Display.jsx'
import Display2 from './assets/Display2.jsx'
import Display4 from './assets/Display4.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
    
  </StrictMode>,
)
