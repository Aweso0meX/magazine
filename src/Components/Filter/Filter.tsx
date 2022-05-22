import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material'
import React, { useState } from 'react'
import styles from './Filter.module.scss'

export const Filter = () => {
  const [sortPrice, setSortPrice] = useState<string>('')
  const [sortColor, setSortColor] = useState<string>('')
  const [sortBrand, setSortBrand] = useState<string>('')

  const handleChangePrice = (event: SelectChangeEvent) => {
    setSortPrice(event.target.value)
  }
  const handleChangeColor = (event: SelectChangeEvent) => {
    setSortColor(event.target.value)
  }
  const handleChangeBrand = (event: SelectChangeEvent) => {
    setSortBrand(event.target.value)
  }
  return (
    <div className={styles.filterWrapper}>
      <div className={styles.sort}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Цена</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={sortPrice}
            onChange={handleChangePrice}
          >
            <MenuItem value={10}>По убыванию</MenuItem>
            <MenuItem value={20}>По возрастанию</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Цвет</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={sortColor}
            onChange={handleChangeColor}
          >
            <MenuItem value={10}>Белый</MenuItem>
            <MenuItem value={20}>Черный</MenuItem>
            <MenuItem value={20}>Красный</MenuItem>
            <MenuItem value={20}>Серый</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Брэнд</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={sortBrand}
            onChange={handleChangeBrand}
          >
            <MenuItem value={10}>Nike</MenuItem>
            <MenuItem value={20}>Adidas</MenuItem>
            <MenuItem value={20}>Reebok</MenuItem>
          </Select>
        </FormControl>
      </div>
      <TextField id="filled-basic" label="Поиск" variant="filled" />
    </div>
  )
}
