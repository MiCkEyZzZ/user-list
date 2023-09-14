import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { faker } from '@faker-js/faker/locale/ru'

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001'
  }),
  endpoints (builder) {
    return {
      fetchAlbums: builder.query({
        providesTags: (result, error, user) => {
          const tags = result.map((tag) => {
            return { type: 'Album', id: tag.id }
          })
          tags.push({ type: 'UserAlbums', id: user.id })

          return tags
        },
        query (user) {
          return {
            url: '/albums',
            params: {
              userId: user.id
            },
            method: 'GET'
          }
        }
      }),
      addAlbum: builder.mutation({
        invalidatesTags: (result, error, user) => [{ type: 'UserAlbums', id: user.id }],
        query: (user) => {
          return {
            url: '/albums',
            method: 'POST',
            body: {
              userId: user.id,
              title: faker.location.country()
            }
          }
        }
      }),
      deleteAlbum: builder.mutation({
        invalidatesTags: (result, error, album) => [{ type: 'Album', id: album.id }],
        query: (album) => {
          return {
            url: `/albums/${album.id}`,
            method: 'DELETE'
          }
        }
      })
    }
  }
})

export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useDeleteAlbumMutation
} = albumsApi
export { albumsApi }
