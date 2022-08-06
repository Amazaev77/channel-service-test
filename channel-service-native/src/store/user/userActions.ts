import { createAsyncThunk } from '@reduxjs/toolkit'
import { IAuthorizedUser } from 'src/models/IAuthorizedUser'
import { AuthService } from 'src/services/AuthService'

import { IUsernamePassword } from './types'
import { logout, setError } from './userSlice'

export const login = createAsyncThunk<IAuthorizedUser, IUsernamePassword>(
  'auth/login',
  async ({ username, password }, thunkApi) => {
    try {
      const response = await AuthService.login(username, password)
      const { data } = response
      // Имитация
      if (data.username !== username || data.password !== password) {
        thunkApi.dispatch(setError('Неверный логин или пароль'))
        return { username: '', password: '' }
      }

      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  },
)

export { logout }
