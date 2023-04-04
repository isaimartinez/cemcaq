import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './reducers/dataSlice'
import viewReducer from './reducers/viewSlice'

export const store = configureStore({
  reducer: {
    data: dataReducer,
    view: viewReducer
  },
})