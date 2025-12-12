import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Shop from './Pages/Shop.jsx'
import AboutUs from './Pages/AboutUs.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  <AboutUs/>    
  </StrictMode>,
)
