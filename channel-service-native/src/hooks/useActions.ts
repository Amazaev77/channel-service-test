import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { AppDispatch } from 'src/store'
import { allActionCreators } from 'src/store/action-creators'

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>()
  return bindActionCreators(allActionCreators, dispatch)
}
