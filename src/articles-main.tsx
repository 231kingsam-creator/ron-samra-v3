import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Articles from './pages/Articles'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Articles />
  </StrictMode>,
)
