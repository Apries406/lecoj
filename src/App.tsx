import { FloatButton } from 'antd'
import './styles/app.less'
import { Outlet } from 'react-router-dom'

function App() {

  const isAdminView = false


  return (
    <>
      {
        !isAdminView ?
          <div className="user-content full-height flex-column">
            <div id="oj-content">
              <Outlet />
            </div>
          </div>
          :
          <div className="user-content"></div>
      }
      <FloatButton.BackTop />
    </>
  )
}

export default App
