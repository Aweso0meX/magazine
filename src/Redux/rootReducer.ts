import { combineReducers } from '@reduxjs/toolkit'
import { basketSliceReducer } from './reducers/basketSlice'
import { mainPageReducer } from './reducers/mainPageSlice'

export const rootReducer = combineReducers({
  basket: basketSliceReducer,
  mainPage: mainPageReducer,
})
