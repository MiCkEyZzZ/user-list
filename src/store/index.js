import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { userReducer } from './slices/user-slice'
import { albumsApi } from './apis/albums-api'
import { photosApi } from './apis/photos-api'

const store = configureStore({
  reducer: {
    users: userReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware)
  }
})

setupListeners(store.dispatch)

export * from './thunks/fetch-users'
export * from './thunks/add-user'
export * from './thunks/delete-user'
export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useDeleteAlbumMutation
} from './apis/albums-api'
export {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useDeletePhotoMutation
} from './apis/photos-api'

export default store
