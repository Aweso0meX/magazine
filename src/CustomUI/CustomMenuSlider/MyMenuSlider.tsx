import cn from 'classnames'
import React, { FC } from 'react'
import styles from './MyMenuSlider.module.scss'

export enum MenuPosition {
  fromTop = 'fromTop',
  fromRight = 'fromRight',
  fromBottom = 'fromBottom',
  fromLeft = 'fromLeft',
}

interface MyMenuSliderProps {
  isVisible: boolean
  setVisible: (e: boolean) => void
  children: React.ReactNode
  variant: MenuPosition
}

export const MyMenuSlider: FC<MyMenuSliderProps> = ({
  isVisible,
  setVisible,
  children,
  variant,
}) => {
  const classWrapper = cn(styles.wrapper)
  return (
    <div className={classWrapper} onClick={() => setVisible(false)}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  )
}
