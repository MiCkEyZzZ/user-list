import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const deleteUser = createAsyncThunk('user/delete', async (user) => {
  await axios.delete(`http://localhost:3001/users/${user.id}`)

  return user
})

export { deleteUser }
