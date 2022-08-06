import { FC, InputHTMLAttributes } from 'react'

import { InputStyled } from 'components/ui/Input/style'

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <InputStyled {...props} />
}

export default Input
