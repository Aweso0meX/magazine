import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IBasketItems } from '../../Types/Types'

interface BasketState {
  valueCurrency: number
  valueItems: number
  isVisible: boolean
  itemsList: IBasketItems[]
}

export const initialState: BasketState = {
  valueCurrency: 0,
  valueItems: 0,
  isVisible: false,
  itemsList: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    toggleBasket(state: BasketState, action: PayloadAction<boolean>) {
      state.isVisible = action.payload
    },
  },
})

export const { toggleBasket } = basketSlice.actions
export const basketSliceReducer = basketSlice.reducer
