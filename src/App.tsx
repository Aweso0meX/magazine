import React from 'react'
import { Filter } from './Components/Filter/Filter'
import { HeaderBuisness } from './Components/Header/HeaderBuisness'
import { Item } from './Components/Item/Item'
import { useAppSelector } from './Hooks/Redux'

export const App = () => {
  const { itemsList } = useAppSelector((state) => state.mainPage)
  return (
    <div className="App">
      <HeaderBuisness />
      <Filter />
      <div className={'itemsWrapper'}>
        {itemsList.map((item) => (
          <Item item={item} />
        ))}
      </div>
    </div>
  )
}
