import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

import { IUser } from 'models/IUser'

import { useGetPhotosByUserIdQuery } from 'services/PhotoService'
import { useGetPostsByUserIdQuery } from 'services/UserService'

import {
  AuthorInfo,
  Body,
  CardHeader,
  CardStyled,
  CompanyName,
  Image,
  Name,
  Photo,
  Title,
} from './style'

const Card: FC<{ user: IUser }> = ({ user }) => {
  const { data: posts, isLoading: isLoadingPosts } = useGetPostsByUserIdQuery(user.id)
  const { data: photos, isLoading: isLoadingPhotos } = useGetPhotosByUserIdQuery(
    user.id,
  )

  return (
    <CardStyled>
      <CardHeader>
        <Photo>
          {isLoadingPhotos ? (
            <Skeleton width={150} height={150} count={1} />
          ) : (
            <Image src={photos?.[0].thumbnailUrl} alt='photo' />
          )}
        </Photo>

        <AuthorInfo>
          <Name>Author: {user.name}</Name>
          <CompanyName>Company: {user.company.name}</CompanyName>
        </AuthorInfo>
      </CardHeader>
      <Title>
        {isLoadingPosts && <Skeleton height={25} count={1} />}
        {posts?.[0].title}
      </Title>
      <Body>
        {isLoadingPosts && <Skeleton height={50} count={1} />}
        {posts?.[0].body}
      </Body>
    </CardStyled>
  )
}

export default Card
