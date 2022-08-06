import Layout from 'components/layout/Layout';
import RequireAuth from 'hoc/RequireAuth';
import UsersPage from 'pages/Users/UsersPage';
import Login from 'pages/Login/LoginPage';

import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route
          index
          element={
            <RequireAuth>
              <UsersPage />
            </RequireAuth>
          }
        />
        <Route path='auth' element={<Login />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
