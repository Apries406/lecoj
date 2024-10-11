import { useRoutes } from 'react-router-dom'

import { ojRoutes } from './router/ojRoutes'

import { FloatButton } from 'antd'

import '@/styles/app.less'
import HeaderBar from '@/common/HeaderBar'


function App() {
  const router = useRoutes(ojRoutes)
  return (
    <>
      <FloatButton.BackTop visibilityHeight={50} />

      <header className='header-bar'>
        <HeaderBar />
      </header>
      <main className='oj-content'>
        {router}
      </main>
      <footer className='footer-bar fix-to-bottom'>
        All rights reserved.
      </footer>
    </>
  )
}

export default App

