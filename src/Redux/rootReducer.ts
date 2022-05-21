import { combineReducers } from '@reduxjs/toolkit'
import { basketSliceReducer } from './reducers/basketSlice'


export const rootReducer = combineReducers ({
  basket : basketSliceReducer
})