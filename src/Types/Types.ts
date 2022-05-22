export interface IBasketItems {
  image: string
  title: string
  color: string
  size: string
  valueItems: number
  valueCurrency: number
}

export interface IItem {
  image: string
  title: string
  color: string
  size: number[]
  price: number
  rating: number
}
