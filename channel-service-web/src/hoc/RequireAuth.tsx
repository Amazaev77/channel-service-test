import { FC, ReactElement } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { useTypedSelector } from 'hooks/useTypedSelector'

interface RequireAuthProps {
  children: ReactElement
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const location = useLocation()

  const isAuth = useTypedSelector((state) => state.user.isAuth)

  if (!isAuth) {
    return <Navigate to='/auth' state={{ from: location }} />
  }

  return children
}

export default RequireAuth
