import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IAuthorizedUser } from 'src/models/IAuthorizedUser'

import { UserState } from './types'
import { login } from './userActions'

const initialState: UserState = {
  isAuth: false,
  error: '',
  isLoading: false,
  user: {} as IAuthorizedUser,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.isLoading = false
    },
    logout: (state) => {
      state.user = {} as IAuthorizedUser
      state.isAuth = false
      state.error = ''
      state.isLoading = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload
        // так не должно быть
        if (action.payload.username) {
          state.isAuth = true
          state.error = ''
        }
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.error = payload as string
        state.isLoading = false
      })
  },
})

export const { reducer: userReducer } = userSlice
export const { setError, logout } = userSlice.actions
