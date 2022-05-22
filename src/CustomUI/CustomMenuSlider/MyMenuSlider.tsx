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
  const classWrapper = cn(styles.wrapper, {
    [styles.activeBottom]: variant === MenuPosition.fromBottom,
    [styles.activeLeft]: variant === MenuPosition.fromLeft,
    [styles.activeRight]: variant === MenuPosition.fromRight,
    [styles.activeTop]: variant === MenuPosition.fromTop,
  })
  const classChildrenWrapper = cn(styles.childrenWrapper, {
    [styles.activeMenuBotton]: variant === MenuPosition.fromBottom,
    [styles.activeMenuLeft]: variant === MenuPosition.fromLeft,
    [styles.activeMenuRight]: variant === MenuPosition.fromRight,
    [styles.activeMenuTop]: variant === MenuPosition.fromTop,
  })

  return (
    <div
      className={isVisible ? classWrapper : styles.wrapper}
      onClick={() => setVisible(false)}
    >
      <div
        className={isVisible ? classChildrenWrapper : ''}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}
