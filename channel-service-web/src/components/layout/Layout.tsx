import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import Header from 'components/layout/Header/Header'

const Layout: FC = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
