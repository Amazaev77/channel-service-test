import { FC } from 'react'
import { Button, ButtonProps } from 'react-native'
import { blueWater } from 'src/constants/colors'

import { ButtonWrap } from './style'

const ButtonComponent: FC<ButtonProps> = (props) => {
  return (
    <ButtonWrap>
      <Button color={blueWater} {...props} />
    </ButtonWrap>
  )
}

export default ButtonComponent
