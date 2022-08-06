import { Text } from 'react-native'
import { Provider } from 'react-redux'
import { useGoogleFonts } from 'src/hooks/useGoogleFonts'
import AppRouter from 'src/screens/AppRouter'
import { Loader } from 'src/screens/Users/style'
import { store } from 'src/store'

export default function App() {
  const { fontsLoaded, error } = useGoogleFonts()

  if (!fontsLoaded) {
    return <Loader size='large' color='#0000ff' />
  }

  if (error) {
    return <Text>Произошла ошибка при загрузке шрифтов</Text>
  }

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}
