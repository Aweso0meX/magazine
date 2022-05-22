import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Filter } from '../../Components/Filter/Filter'
import { FilterObj, IItem } from '../../Types/Types'
import { Items } from '../items'

interface MainPageState {
  itemsList: IItem[]
}

export const initialState: MainPageState = {
  itemsList: Items,
}

export const mainPageSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {},
})

// export const {} = mainPageSlice.actions
export const mainPageReducer = mainPageSlice.reducer
