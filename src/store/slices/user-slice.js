import { createSlice } from '@reduxjs/toolkit'

import { addUser } from '../thunks/add-user'
import { deleteUser } from '../thunks/delete-user'
import { fetchUsers } from '../thunks/fetch-users'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: [],
    isLoading: false,
    error: null
  },
  extraReducers (builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })

    builder.addCase(addUser.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = [...state.data, action.payload]
    })
    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })

    builder.addCase(deleteUser.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = state.data.filter((user) => user.id !== action.payload.id)
    })
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })
  }
})

export const userReducer = userSlice.reducer
