import { FC } from 'react'
import { Text, TouchableHighlight } from 'react-native'
import { cream } from 'src/constants/colors'
import { useAuth } from 'src/hooks/useAuth'

import { ExitIcon, HeaderStyled, LogoImg } from './style'

const logo = require('src/assets/logo.png')
const exitIcon = require('src/assets/exit.png')

const Header: FC = () => {
  const { logout, isAuth } = useAuth()

  const handleLogout = () => logout()

  return (
    <HeaderStyled>
      <LogoImg source={logo} />
      {isAuth && (
        <TouchableHighlight underlayColor={cream} onPress={handleLogout}>
          <ExitIcon source={exitIcon} />
        </TouchableHighlight>
      )}
    </HeaderStyled>
  )
}

export default Header
