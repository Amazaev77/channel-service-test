import { FC } from 'react'
import { FlatList, RefreshControl } from 'react-native'
import Card from 'src/components/layout/Card/Card'
import { ErrorMessage, Loader, UsersContainer } from 'src/screens/Users/style'
import { useGetAllUsersQuery } from 'src/services/UserService'

const Users: FC = () => {
  const { data: users, isError, isLoading, refetch } = useGetAllUsersQuery(null)

  if (isLoading) {
    return <Loader size='large' color='#0000ff' />
  }

  if (isError) {
    return <ErrorMessage>Произошла ошибка при загрузке данных</ErrorMessage>
  }

  return (
    <UsersContainer>
      <FlatList
        data={users}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetch} />}
        renderItem={({ item }) => <Card key={item.id} user={item} />}
      />
    </UsersContainer>
  )
}

export default Users
