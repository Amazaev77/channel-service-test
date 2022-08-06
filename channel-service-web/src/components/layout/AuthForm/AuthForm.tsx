import { ChangeEvent, FC, SyntheticEvent, useState } from 'react'

import { useActions } from 'hooks/useActions'
import { useAuth } from 'hooks/useAuth'
import { useRedirect } from 'hooks/useRedirect'

import {
  AuthFormStyled,
  ErrorMessage,
  Field,
  Label,
  Title,
} from 'components/layout/AuthForm/style'
import Button from 'components/ui/Button/Button'
import Input from 'components/ui/Input/Input'

type InpEvent = ChangeEvent<HTMLInputElement>
type SubmitEvent = SyntheticEvent<HTMLFormElement>

const AuthForm: FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeUsername = (e: InpEvent) => setUsername(e.target.value)
  const handleChangePassword = (e: InpEvent) => setPassword(e.target.value)

  const { isAuth, isLoading, hasError, login } = useAuth()

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault()

    if (username.trim() && password.trim()) {
      login({ username, password })
    }
  }

  useRedirect('/', isAuth)

  return (
    <AuthFormStyled onSubmit={handleSubmit}>
      <Title>Authorization</Title>
      <Field>
        <Label>Login</Label>
        <Input value={username} onChange={handleChangeUsername} required />
      </Field>
      <Field>
        <Label>Password</Label>
        <Input
          type='password'
          value={password}
          onChange={handleChangePassword}
          required
        />
      </Field>
      {hasError && !isLoading && <ErrorMessage>Неверный логин или пароль</ErrorMessage>}
      <Button>Войти</Button>
    </AuthFormStyled>
  )
}

export default AuthForm
