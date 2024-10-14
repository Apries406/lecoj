import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { ojRouter } from '@/router/ojRoutes.tsx'

import "./styles/main.less"
import './styles/utils.less'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={ojRouter} />
  </StrictMode>,
)
