import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material'
import React, { FC } from 'react'
import { FilterObj } from '../../Types/Types'
import styles from './Filter.module.scss'

interface FilterProps {
  filter: FilterObj
  setFilter: (e: FilterObj) => void
}

export const Filter: FC<FilterProps> = ({ filter, setFilter }) => {
  const handleChangePrice = (event: SelectChangeEvent) => {
    setFilter({ ...filter, sortPrice: event.target.value })
  }

  const handleChangeColor = (event: SelectChangeEvent) => {
    setFilter({ ...filter, sortColor: event.target.value })
  }

  const handleChangeBrand = (event: SelectChangeEvent) => {
    setFilter({ ...filter, sortBrand: event.target.value })
  }

  return (
    <div className={styles.filterWrapper}>
      <div className={styles.sort}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Цена</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={filter.sortPrice}
            onChange={handleChangePrice}
            name={'sortBYPrice'}
          >
            <MenuItem value={'decrement'}>По убыванию</MenuItem>
            <MenuItem value={'increment'}>По возрастанию</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Цвет</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={filter.sortColor}
            onChange={handleChangeColor}
            name={'sortBYColor'}
          >
            <MenuItem value={'white'}>Белый</MenuItem>
            <MenuItem value={'black'}>Черный</MenuItem>
            <MenuItem value={'red'}>Красный</MenuItem>
            <MenuItem value={'gray'}>Серый</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Брэнд</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={filter.sortBrand}
            onChange={handleChangeBrand}
            name={'sortBYBrand'}
          >
            <MenuItem value={'Nike'}>Nike</MenuItem>
            <MenuItem value={'Adidas'}>Adidas</MenuItem>
            <MenuItem value={'Reebok'}>Reebok</MenuItem>
          </Select>
        </FormControl>
      </div>
      <TextField
        value={filter.query}
        id="filled-basic"
        label="Поиск по названию"
        variant="filled"
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
    </div>
  )
}
