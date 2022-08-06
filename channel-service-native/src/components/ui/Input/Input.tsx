import { FC } from 'react'
import { TextInputProps } from 'react-native'
import { InputStyled } from 'src/components/ui/Input/style'

const Input: FC<TextInputProps> = (props) => {
  return <InputStyled {...props} />
}

export default Input
