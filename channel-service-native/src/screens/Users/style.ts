import { errorColor } from 'src/constants/colors'
import styled from 'styled-components/native'

export const UsersContainer = styled.View`
  margin: 20px auto 0;
`

export const ErrorMessage = styled.Text`
  color: ${errorColor};
  font-weight: 600;
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
  font-family: 'Inter_600SemiBold';';
`

export const Loader = styled.ActivityIndicator`
  margin-top: 20px;
`
