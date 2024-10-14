import { Outlet } from 'react-router-dom'
import { FloatButton } from 'antd'

import HeaderBar from '@/common/HeaderBar'
import '@/styles/app.less'


function Layout() {
    return (
        <>
            <FloatButton.BackTop visibilityHeight={50} />

            <header className='header-bar'>
                <HeaderBar />
            </header>
            <main className='oj-content'>
                <Outlet />
            </main>
            <footer className='footer-bar fix-to-bottom'>
                All rights reserved.
            </footer>
        </>
    )
}

export default Layout

