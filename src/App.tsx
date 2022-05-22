import React, { useState } from 'react'
import { Filter } from './Components/Filter/Filter'
import { HeaderBuisness } from './Components/Header/HeaderBuisness'
import { Item } from './Components/Item/Item'
import { useAppSelector } from './Hooks/Redux'
import { FilterObj } from './Types/Types'

export const App = () => {
  const [filter, setFilter] = useState<FilterObj>({
    sortPrice: '',
    sortBrand: '',
    sortColor: '',
    query: '',
  })
  const { itemsList } = useAppSelector((state) => state.mainPage)
  const filterItems = itemsList.filter((item) => {
    return item.title.toLowerCase().includes(filter.query.toLowerCase())
  })
  return (
    <div className="App">
      <HeaderBuisness />
      <Filter filter={filter} setFilter={setFilter} />
      <div className={'itemsWrapper'}>
        {filterItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
