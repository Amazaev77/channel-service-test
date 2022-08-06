import styled from 'styled-components'

import { errorColor } from 'constants/colors'

export const UsersContainer = styled.div`
  max-width: 947px;
  margin: 20px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 744px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ErrorMessage = styled.div`
  color: ${errorColor};
  font-weight: 600;
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
`
