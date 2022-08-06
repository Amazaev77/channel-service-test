import { createSlice } from '@reduxjs/toolkit'

import { IAuthorizedUser } from 'models/IAuthorizedUser'

import { login, logout } from 'store/user/userActions'

import { UserState } from './types'

const userFromStorage = JSON.parse(localStorage.getItem('user') as string)

const initialState: UserState = {
  isAuth: !!userFromStorage,
  error: '',
  isLoading: false,
  user: userFromStorage,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload
        state.isAuth = true
        state.error = ''
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.error = payload as string
        state.isLoading = false
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = {} as IAuthorizedUser
        state.isAuth = false
        state.error = ''
        state.isLoading = false
      })
  },
})

export const { reducer: userReducer } = userSlice
