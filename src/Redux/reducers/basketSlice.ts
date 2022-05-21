import { IBasketItems } from '../../Types/Types'
import { createSlice , PayloadAction } from '@reduxjs/toolkit'


interface basketState {
  valueCurrency : number,
  valueItems : number,
  isVisible : boolean,
  itemsList : IBasketItems[]
}

export const initialState : basketState = {
  valueCurrency : 0 ,
  valueItems : 0 ,
  isVisible : true ,
  itemsList : []
}

export const basketSlice = createSlice ({
  name : 'basket' ,
  initialState ,
  reducers : {
    toggleBasket (state , action : PayloadAction<boolean>) {
      state.isVisible = action.payload
    } ,

  }
})

export const { toggleBasket } = basketSlice.actions
export const basketSliceReducer = basketSlice.reducer