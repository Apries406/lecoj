import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./styles/main.less"
import './styles/utils.less'
import { BrowserRouter, Router, RouterProvider } from 'react-router-dom'
import ojRouter from './router/ojRoutes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={ojRouter} />
  </StrictMode>,
)
