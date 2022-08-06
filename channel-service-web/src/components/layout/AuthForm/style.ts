import styled from 'styled-components'

import { blueWater, errorColor } from 'constants/colors'

export const AuthFormStyled = styled.form`
  border: 5px solid ${blueWater};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 46px 21px 95px 19px;
  max-width: 480px;
  max-height: 360px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  @media (max-width: 744px) {
    max-width: 290px;
    padding: 19px 43px 26px 35px;
  }
`

export const Title = styled.div`
  color: ${blueWater};
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 50px;
  text-align: center;
  @media (max-width: 744px) {
    margin-bottom: 27px;
  }
`

export const Field = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  @media (max-width: 744px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const Label = styled.label`
  font-size: 24px;
  font-weight: 800;
  color: black;
  @media (max-width: 744px) {
    margin-bottom: 13px;
    align-self: flex-start;
  }
`

export const ErrorMessage = styled.div`
  color: ${errorColor};
  text-align: center;
  font-size: 13px;
  position: absolute;
  font-weight: 500;
  width: 100%;
  left: 0;
  transform: translateY(-20px);
`
