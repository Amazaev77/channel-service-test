import { useActions } from 'src/hooks/useActions'
import { useTypedSelector } from 'src/hooks/useTypedSelector'

export const useAuth = () => {
  const isAuth = useTypedSelector((state) => state.user.isAuth)
  const isLoading = useTypedSelector((state) => state.user.isLoading)
  const user = useTypedSelector((state) => state.user.user)
  const error = useTypedSelector((state) => state.user.error)
  const { login, logout } = useActions()

  return { isAuth, isLoading, user, hasError: error, login, logout }
}
