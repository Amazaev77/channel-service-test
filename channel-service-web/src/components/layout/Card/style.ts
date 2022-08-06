import styled from 'styled-components'

import { blueWater } from 'constants/colors'

export const CardStyled = styled.div`
  border: 5px solid ${blueWater};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-bottom: 20px;
  flex: 0 0 49.315%;
  padding: 25px 30px 36px 21px;
  @media (max-width: 744px) {
    width: 292px;
  }
`

export const CardHeader = styled.div`
  display: flex;
  margin-bottom: 26px;
  @media (max-width: 1440px) {
    flex-direction: column;
    margin-bottom: 0;
  }
`

export const Photo = styled.div`
  @media (max-width: 1440px) {
    margin-bottom: 22px;
  }
  @media (max-width: 744px) {
    display: none;
  }
  @media (min-width: 1440px) {
    margin-right: 30px;
  }
`

export const Image = styled.img`
  width: 150px;
  height: 150px;
`

export const AuthorInfo = styled.div``

export const Name = styled.div`
  margin-bottom: 27px;
  color: #000;
  font-weight: 800;
  font-size: 16px;
  @media (min-width: 744px) {
    margin-bottom: 17px;
  }
`

export const CompanyName = styled.div`
  color: #000;
  font-weight: 800;
  font-size: 16px;
  @media (max-width: 1440px) {
    margin-bottom: 10px;
  }
`

export const Title = styled.div`
  color: #000;
  font-weight: 800;
  font-size: 16px;
  margin-bottom: 40px;
  @media (max-width: 1440px) {
    margin-bottom: 10px;
  }
  @media (max-width: 744px) {
    margin-bottom: 24px;
  }
`

export const Body = styled.div`
  color: #000;
  font-weight: 800;
  font-size: 16px;
  @media (max-width: 744px) {
    display: none;
  }
`
