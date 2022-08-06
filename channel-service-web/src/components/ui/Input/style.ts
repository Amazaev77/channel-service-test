import styled from 'styled-components'

import { lightGrey, blueWater } from 'constants/colors'

export const InputStyled = styled.input`
  border: 4px solid ${blueWater};
  border-radius: 10px;
  width: 295px;
  padding: 0 12px;
  outline: none;
  font-size: 18px;
  font-weight: 700;
  background: ${lightGrey};
  height: 45px;
  @media (max-width: 744px) {
    width: 212px;
    height: 39px;
  }
`
