import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentMode: "Light",
}

export const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setCurrentMode: (state, action) => {
      state.currentMode = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCurrentMode } = viewSlice.actions

export default viewSlice.reducer