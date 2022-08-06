import { FC } from 'react'
import { Text } from 'react-native'
import { IUser } from 'src/models/IUser'
import { useGetPostsByUserIdQuery } from 'src/services/UserService'

import { CardStyled, CompanyName, Name, Title } from './style'

const Card: FC<{ user: IUser }> = ({ user }) => {
  const { data: posts, isLoading: isLoadingPosts } = useGetPostsByUserIdQuery(user.id)

  return (
    <CardStyled>
      <Name>Author: {user.name}</Name>
      <CompanyName>Company: {user.company.name}</CompanyName>
      <Title>
        {isLoadingPosts && <Text>Loading</Text>}
        {posts?.[0].title}
      </Title>
    </CardStyled>
  )
}

export default Card
