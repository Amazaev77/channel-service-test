import { FC } from 'react'
import { View } from 'react-native'
import AppRouter from 'src/screens/AppRouter'

import Header from './Header/Header'

const Layout: FC = () => {
  return (
    <View>
      <Header />
      <AppRouter />
    </View>
  )
}

export default Layout
