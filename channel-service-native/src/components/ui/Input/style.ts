import { TextInput } from 'react-native'
import { blueWater, lightGrey } from 'src/constants/colors'
import styled from 'styled-components/native'

export const InputStyled = styled(TextInput)`
  border: 4px solid ${blueWater};
  border-radius: 10px;
  width: 212px;
  height: 39px;
  padding: 0 12px;
  font-size: 18px;
  font-weight: 700;
  background: ${lightGrey};
`
