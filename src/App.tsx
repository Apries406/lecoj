import { Col, FloatButton, Row } from 'antd'
import '@/styles/app.less'
import { Outlet } from 'react-router-dom'
import IF from '@/components/IF'

function App() {

  const isAdminView = false
  const showFooter = true

  return (
    <>
      <IF tif={!isAdminView}>
        {/* 如果是一般用户 */}
        <IF.If>
          <div className="user-content full-height flex-column">
            <div id="oj-content">
              <Outlet />
            </div>
            {/* 需要显示页脚 */}
            <IF tif={showFooter}>
              <footer className='fix-to-bottom'>
                <div className="mundb-footer">
                  <Row>
                    <Col md={6} xs={24}>
                      <h1>LEC ORG</h1>
                      <span></span>
                    </Col>
                  </Row>
                </div>
              </footer>
            </IF>
          </div>
        </IF.If>
        {/* 如果是管理员 */}
        <IF.Else>
          <div className="admin-content"></div>
        </IF.Else>
      </IF>


      <FloatButton.BackTop />
    </>
  )
}

export default App

