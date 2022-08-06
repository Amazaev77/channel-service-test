import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FC } from 'react'
import Header from 'src/components/layout/Header/Header'
import { useAuth } from 'src/hooks/useAuth'
import Login from 'src/screens/Login/Login'
import Users from 'src/screens/Users/Users'

const Stack = createNativeStackNavigator()

const headerTitle = (props: { children: string; tintColor?: string }) => (
  <Header {...props} />
)

const AppRouter: FC = () => {
  const { isAuth } = useAuth()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuth ? (
          <Stack.Screen name='Home' component={Users} options={{ headerTitle }} />
        ) : (
          <Stack.Screen name='Auth' component={Login} options={{ headerTitle }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRouter
