import { FC } from 'react'

import exitIcon from 'assets/exit.svg'
import logo from 'assets/logo.png'

import { useActions } from 'hooks/useActions'
import { useAuth } from 'hooks/useAuth'
import { useRedirect } from 'hooks/useRedirect'

import {
  Account,
  ExitIcon,
  HeaderStyled,
  Logo,
  LogoImg,
  LogoName,
  Username,
} from './style'

const Header: FC = () => {
  const { isAuth, logout } = useAuth()

  const handleLogout = () => logout()

  useRedirect('/auth', !isAuth)

  return (
    <HeaderStyled>
      <Logo>
        <LogoImg src={logo} alt='logo' />
        <LogoName>Каналсервис</LogoName>
      </Logo>
      {isAuth && (
        <Account>
          <Username>Username</Username>
          <ExitIcon onClick={handleLogout} src={exitIcon} alt='exit' />
        </Account>
      )}
    </HeaderStyled>
  )
}

export default Header
