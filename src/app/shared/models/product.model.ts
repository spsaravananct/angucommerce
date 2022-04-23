export interface Product {
  data: ProductData[]
  meta: Meta
}

export interface ProductData {
  id: number
  name: string
  description: string
  price: number
  slug: any
  image: Image
  categories: Category[]
}

export interface Image {
  id: number
  url: string
}

export interface Category {
  id: number
  name: string
  image: CategoryImage
}

export interface CategoryImage {
  id: number
  url: string
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
