import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from 'src/constants/baseUrl'
import { IPost } from 'src/models/IPost'
import { IUser } from 'src/models/IUser'

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['User'],
  endpoints: (build) => ({
    getAllUsers: build.query<IUser[], null>({
      query: () => ({ url: '/users' }),
    }),
    getPostsByUserId: build.query<IPost[], number>({
      query: (userId: number) => ({ url: `/users/${userId}/posts` }),
    }),
  }),
})

export const { useGetAllUsersQuery, useGetPostsByUserIdQuery } = userAPI
