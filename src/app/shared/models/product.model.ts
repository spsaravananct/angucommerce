export interface Product {
  data: ProductData[]
  meta: Meta
}

export interface ProductData {
  id: number
  attributes: ProductAttributes
}

export interface ProductAttributes {
  name: string
  description: string
  price: number
  slug: any
  image: ProductImage
  categories: Categories
}

export interface ProductImage {
  data: ImageData
}

export interface ImageData {
  id: number
  attributes: ImageAttributes
}

export interface ImageAttributes {
  name: string
  alternativeText: string
  caption: string
  url: string
}

export interface Categories {
  data: CategoryData[]
}

export interface CategoryData {
  id: number
  attributes: CategoryAttributes
}

export interface CategoryAttributes {
  name: string
  status: boolean
  sort_order: number
  slug: string
}

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}