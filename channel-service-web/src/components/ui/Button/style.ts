import styled from 'styled-components'

import { blueWater } from 'constants/colors'

export const ButtonStyled = styled.button`
  width: 110px;
  height: 35px;
  font-weight: 700;
  font-size: 15px;
  border-radius: 6px;
  cursor: pointer;
  margin: 10px auto 0;
  display: block;
  outline: none;
  color: ${blueWater};
  border: 3px solid ${blueWater};
`
