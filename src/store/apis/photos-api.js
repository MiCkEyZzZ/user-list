import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { faker } from '@faker-js/faker/locale/ru'

const photosApi = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001'
  }),
  endpoints (builder) {
    return {
      fetchPhotos: builder.query({
        providesTags: (result, error, album) => {
          const tags = result.map((tag) => {
            return { type: 'Photo', id: tag.id }
          })
          tags.push({ type: 'AlbumPhoto', id: album.id })
          return tags
        },
        query: (album) => {
          return {
            url: '/photos',
            params: {
              albumId: album.id
            },
            method: 'GET'
          }
        }
      }),
      addPhoto: builder.mutation({
        invalidatesTags: (result, error, album) => [{ type: 'AlbumPhoto', id: album.id }],
        query: (album) => {
          return {
            url: '/photos',
            method: 'POST',
            body: {
              albumId: album.id,
              url: faker.image.urlLoremFlickr({ width: 150, height: 150, category: 'abstract' })
            }
          }
        }
      }),
      deletePhoto: builder.mutation({
        invalidatesTags: (result, error, photo) => [{ type: 'Photo', id: photo.id }],
        query: (album) => {
          return {
            url: `/photos/${album.id}`,
            method: 'DELETE'
          }
        }
      })
    }
  }
})

export const {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useDeletePhotoMutation
} = photosApi
export { photosApi }
