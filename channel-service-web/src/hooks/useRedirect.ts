import { useEffect } from 'react'
import { useNavigate } from 'react-router'

export const useRedirect = (path: string, condition: boolean) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (condition) {
      navigate(path)
    }
  }, [navigate, path, condition])
}
