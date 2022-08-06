import { blueWater } from 'src/constants/colors'
import styled from 'styled-components/native'

export const CardStyled = styled.View`
  border: 5px solid ${blueWater};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 15px 17px 35px;
  width: 292px;
  margin: 14px auto 0;
`

export const Name = styled.Text`
  margin-bottom: 25px;
  color: #000;
  font-weight: 800;
  font-size: 16px;
  font-family: 'Inter_800ExtraBold';
`

export const CompanyName = styled.Text`
  color: #000;
  font-weight: 800;
  font-size: 16px;
  margin-bottom: 17px;
  font-family: 'Inter_800ExtraBold';
`

export const Title = styled.Text`
  color: #000;
  font-weight: 800;
  font-size: 16px;
  font-family: 'Inter_800ExtraBold';
`
