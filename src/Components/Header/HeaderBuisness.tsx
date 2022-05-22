import React from 'react'
import {
  MenuPosition,
  MyMenuSlider,
} from '../../CustomUI/CustomMenuSlider/MyMenuSlider'
import { useAppDispatch, useAppSelector } from '../../Hooks/Redux'
import { toggleBasket } from '../../Redux/reducers/basketSlice'
import { Header } from './Header'
import { Basket } from './basket/Basket'

export const HeaderBuisness = () => {
  const { valueItems, valueCurrency, isVisible } = useAppSelector(
    (state) => state.basket
  )
  const dispatch = useAppDispatch()

  const toggleMenu = () => {
    dispatch(toggleBasket(true))
  }

  return (
    <>
      <Header
        toggleMenu={toggleMenu}
        valueCurrency={valueCurrency}
        valueItems={valueItems}
      />
      <MyMenuSlider
        isVisible={isVisible}
        setVisible={(e) => dispatch(toggleBasket(e))}
        variant={MenuPosition.fromLeft}
      >
        <Basket />
      </MyMenuSlider>
    </>
  )
}
