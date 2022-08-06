import axios from 'axios'

import { IAuthorizedUser } from 'models/IAuthorizedUser'

export const AuthService = {
  async login(username: string, password: string) {
    // фейковая авторизация, проверяем юзера,
    // используя метод post, токены и все прочее
    const response = await axios.get<IAuthorizedUser>('./user.json')

    const isValidData =
      response.data?.username !== username || response.data?.password !== password

    if (isValidData) {
      throw Error('Неверный логин или пароль')
    }

    return response
  },

  async logout() {
    localStorage.removeItem('user')
  },
}
