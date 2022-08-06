import { FC, useState } from 'react'
import { Text } from 'react-native'
import Button from 'src/components/ui/Button/Button'
import Input from 'src/components/ui/Input/Input'
import { useAuth } from 'src/hooks/useAuth'

import { AuthFormStyled, ErrorMessage, Label, Title } from './style'

const AuthForm: FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { hasError, login, isLoading } = useAuth()

  const handleSubmit = () => {
    if (username.trim() && password.trim()) {
      login({ username, password })
    }
  }

  return (
    <AuthFormStyled>
      <Title>Authorization</Title>
      <Label>Login</Label>
      <Input value={username} onChangeText={setUsername} />
      <Label>Password</Label>
      <Input value={password} onChangeText={setPassword} secureTextEntry />
      <ErrorMessage>
        {!!hasError && !isLoading && <Text>Неверный логин или пароль</Text>}
      </ErrorMessage>
      <Button disabled={isLoading} title='Войти' onPress={handleSubmit} />
    </AuthFormStyled>
  )
}

export default AuthForm
