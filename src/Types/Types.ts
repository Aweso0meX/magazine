export interface IBasketItems {
  image: string
  title: string
  color: string
  size: string
  valueItems: number
  valueCurrency: number
}

export interface IItem {
  id: number
  image: string
  title: string
  color: string
  size: number[]
  price: number
  rating: number
}

export interface FilterObj {
  sortPrice: string
  sortBrand: string
  sortColor: string
  query: string
}
