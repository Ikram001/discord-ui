import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Students from './pages/Students.jsx'
import Teacher from './pages/Teachers.jsx'
import Finance from './pages/Finance.jsx'
import Food from './pages/Food.jsx'
import Dashboard from './pages/Dashboard.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
