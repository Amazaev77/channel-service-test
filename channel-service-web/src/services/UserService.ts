import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { baseUrl } from 'constants/baseUrl'

import { IPost } from 'models/IPost'
import { IUser } from 'models/IUser'

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
