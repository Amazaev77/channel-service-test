import { IAuthorizedUser } from 'src/models/IAuthorizedUser'

export interface UserState {
  isAuth: boolean
  error: string
  isLoading: boolean
  user: IAuthorizedUser
}

export interface IUsernamePassword {
  username: string
  password: string
}
