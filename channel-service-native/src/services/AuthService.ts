import axios from 'axios'
import { IAuthorizedUser } from 'src/models/IAuthorizedUser'

const userUrl = 'https://usertest-b552a-default-rtdb.firebaseio.com/user.json'

export const AuthService = {
  async login(username: string, password: string) {
    return await axios.get<IAuthorizedUser>(userUrl)
  },
}
