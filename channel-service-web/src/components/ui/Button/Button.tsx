import { ButtonHTMLAttributes, FC } from 'react'

import { ButtonStyled } from './style'

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <ButtonStyled {...props}>{props.children}</ButtonStyled>
}

export default Button
