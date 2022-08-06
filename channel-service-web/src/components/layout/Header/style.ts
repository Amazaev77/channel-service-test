import styled from 'styled-components'

import { blueDark, cream } from 'constants/colors'

export const HeaderStyled = styled.header`
  height: 118px;
  background-color: ${cream};
  padding: 27px 35px 28px 41px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
`

export const LogoImg = styled.img`
  width: 63px;
`
export const LogoName = styled.span`
  color: ${blueDark};
  font-weight: 800;
  font-size: 26px;
  @media (max-width: 744px) {
    display: none;
  }
`

export const Account = styled.div`
  display: flex;
  align-items: center;
`

export const Username = styled.div`
  color: #000;
  font-weight: 800;
  font-size: 24px;
  @media (max-width: 744px) {
    display: none;
  }
`

export const ExitIcon = styled.img`
  width: 63px;
  margin-left: 34px;
  cursor: pointer;
`
