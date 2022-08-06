import { FC } from 'react'

import AuthForm from 'components/layout/AuthForm/AuthForm'

import { Login } from './style'

const LoginPage: FC = () => {
  return (
    <Login>
      <AuthForm />
    </Login>
  )
}

export default LoginPage
