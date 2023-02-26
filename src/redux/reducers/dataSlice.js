import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import capPM10 from '../../data/dataCap12H.json'

const initialState = {
  value: 0,
  station: {}
}

const fetchData = createAsyncThunk(
  'users/fetchData',
  async () => {
    const response = capPM10
    return response
  }
)

export const dataSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchData.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload)
    })
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = dataSlice.actions

export default dataSlice.reducer