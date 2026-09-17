import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import App from './App.jsx'
import AuthProvider from './context/auth-context'
import InstructorProvider from './context/instructor-context'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <AuthProvider>
      <InstructorProvider>
        <StudentProvider>
          <App />
        </StudentProvider>
        </InstructorProvider>
      </AuthProvider>
    </BrowserRouter>
  
)