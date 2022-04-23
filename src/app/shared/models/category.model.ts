export interface Category {
    data: CategoryData[]
    meta: Meta
  }
  
  export interface CategoryData {
    id: number
    name: string
    status: boolean
    sort_order: number
    slug: string
    image: CategoryImage
  }
  
  export interface CategoryImage {
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
  