import { createAsyncThunk } from '@reduxjs/toolkit'

import { IAuthorizedUser } from 'models/IAuthorizedUser'

import { AuthService } from 'services/AuthService'

import { IUsernamePassword } from 'store/user/types'

export const login = createAsyncThunk<IAuthorizedUser, IUsernamePassword>(
  'auth/login',
  async ({ username, password }, thunkApi) => {
    try {
      const response = await AuthService.login(username, password)

      localStorage.setItem('user', JSON.stringify(response.data))

      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  },
)

export const logout = createAsyncThunk('auth/logout', async () => {
  localStorage.removeItem('user')
})
