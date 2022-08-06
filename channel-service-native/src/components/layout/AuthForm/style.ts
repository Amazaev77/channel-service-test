import { blueWater, errorColor } from 'src/constants/colors'
import styled from 'styled-components/native'

export const AuthFormStyled = styled.View`
  border: 5px solid ${blueWater};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 19px 43px 26px 35px;
  max-width: 290px;
  margin: 14px auto 0;
`

export const Title = styled.Text`
  color: ${blueWater};
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 27px;
  text-align: center;
  font-family: 'Inter_800ExtraBold';
`

export const Label = styled.Text`
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 13px;
  color: black;
  font-family: 'Inter_800ExtraBold';
`

export const ErrorMessage = styled.Text`
  color: ${errorColor};
  text-align: center;
  font-size: 12px;
  margin-top: 10px;
  font-family: 'Inter_600SemiBold';
`
