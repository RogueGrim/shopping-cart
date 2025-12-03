import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Carosel from './component/Carosel.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Carosel/>
  </StrictMode>,
)
