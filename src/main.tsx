import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import GeneratePassword from './GeneratePassword.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GeneratePassword />
  </StrictMode>
)
