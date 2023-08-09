import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getUsers } from '../services/userServices'

export const fetchUsers = createAsyncThunk('user/fetchUsers', async (params, { rejectWithValue }) => {
  try {
    const response = await getUsers(params)

    return response
  } catch (error) {
    if (!err.response) {
      throw err
    }

    return rejectWithValue(err.response)
  }
})

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: [],
    loading: false,
    error: null,
    message: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload.data.results
        state.message = action.payload.message
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export default userSlice.reducer
