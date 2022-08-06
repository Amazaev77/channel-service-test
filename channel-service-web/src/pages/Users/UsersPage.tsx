import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

import { ErrorMessage, UsersContainer } from 'pages/Users/style'

import { useGetAllUsersQuery } from 'services/UserService'

import Card from 'components/layout/Card/Card'

import 'react-loading-skeleton/dist/skeleton.css'

const UsersPage: FC = () => {
  const { data: users, isLoading, isError } = useGetAllUsersQuery(null)

  if (isError) {
    return <ErrorMessage>Произошла ошибка при загрузке данных</ErrorMessage>
  }

  return (
    <UsersContainer>
      {isLoading &&
        new Array(4)
          .fill('')
          .map((_, idx) => (
            <Skeleton
              key={idx}
              width={467}
              height={388}
              count={1}
              style={{ marginBottom: 20 }}
            />
          ))}
      {users?.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </UsersContainer>
  )
}

export default UsersPage
