import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Rating,
} from '@mui/material'
import React, { FC, useState } from 'react'
import { IItem } from '../../Types/Types'
import styles from './Item.module.scss'

interface ItemProps {
  item: IItem
}

export const Item: FC<ItemProps> = ({ item }) => {
  const [itemValue, setItemValue] = useState<number | null>(2)
  const [rating, setRating] = useState<number | null>(item.rating)
  return (
    <div className={styles.ItemWrapper}>
      <img className={styles.image} src={item.image} alt="item" />
      <h1 className={styles.itemTitle}>{item.title}</h1>
      <div className={styles.options}>
        <div className={styles.rating}>
          <h5>Рейтинг: </h5>
          <Rating
            onChange={(event, value) => setRating(value)}
            name="simple-controlled"
            value={rating}
          />
        </div>
        <h4 className={styles.sizeFont}>Выберите размер:</h4>
        <div className={styles.size}>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            {item.size.map((size) => (
              <FormControlLabel value={size} control={<Radio />} label={size} />
            ))}
          </RadioGroup>
        </div>
        <div className={styles.buy}>
          <div className={styles.price}>
            <p>Цена:</p>
            <h1>{item.price}</h1>
          </div>
          <Button variant="contained">
            <div className={styles.btn}>
              <p>Добавить</p>
              <div>{itemValue}</div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}
