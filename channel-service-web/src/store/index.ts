import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { photoAPI } from 'services/PhotoService'
import { userAPI } from 'services/UserService'

import { userReducer } from './user/userSlice'

const rootReducer = combineReducers({
  user: userReducer,
  [userAPI.reducerPath]: userAPI.reducer,
  [photoAPI.reducerPath]: photoAPI.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userAPI.middleware).concat(photoAPI.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export const store = setupStore()

setupListeners(store.dispatch)
