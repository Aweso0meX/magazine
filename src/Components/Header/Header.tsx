import { Button } from '@mui/material'
import React, { FC } from 'react'
import { BiRuble } from 'react-icons/bi'
import { BsCartFill } from 'react-icons/bs'
import logo from '../../Assets/logo.svg'
import styles from './Header.module.scss'

interface HeaderProps {
  toggleMenu: (e: any) => void
  valueCurrency: number
  valueItems: number
}

export const Header: FC<HeaderProps> = ({
  toggleMenu,
  valueCurrency,
  valueItems,
}) => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" />
      <Button onClick={toggleMenu} variant="contained" color={'info'}>
        <>
          <div className={styles.basketValue}>
            <BiRuble />
            <div className={styles.valueCurrency}>{valueCurrency}</div>
          </div>
          <div className={styles.basketValue}>
            <BsCartFill />
            <div className={styles.valueItems}>{valueItems}</div>
          </div>
        </>
      </Button>
    </div>
  )
}
