import { cream } from 'src/constants/colors'
import styled from 'styled-components/native'

export const HeaderStyled = styled.View`
  height: 118px;
  width: 100%;
  background-color: ${cream};
  padding: 27px 15px 28px 15px;
  flex-direction: row;
  justify-content: space-between;
  transform: translateX(-16px);
`

export const Logo = styled.View`
  display: flex;
  align-items: center;
`

export const LogoImg = styled.Image`
  width: 70px;
  height: 63px;
`

export const ExitIcon = styled.Image`
  width: 62px;
  height: 55px;
`
