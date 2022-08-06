import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { baseUrl } from 'constants/baseUrl'

import { IPhoto } from 'models/IPhoto'

export const photoAPI = createApi({
  reducerPath: 'photosAPI',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Photo'],
  endpoints: (build) => ({
    getPhotosByUserId: build.query<IPhoto[], number>({
      query: (userId: number) => `/albums/${userId}/photos`,
    }),
  }),
})
export const { useGetPhotosByUserIdQuery } = photoAPI
