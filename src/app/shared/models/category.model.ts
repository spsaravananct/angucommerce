export interface Category {
    data: CategoryData[]
    meta: Meta
}

export interface CategoryAttributes {
    name: string
    status: boolean
    sort_order: number
    slug: string
    image: CategoryImage
  }

export interface CategoryData {
    id: number
    attributes: CategoryAttributes
}


export interface CategoryImage {
    data: CategoryImageData
}


export interface CategoryImageData {
    id: number
    attributes: CategoryImageDataAttributes
}

export interface CategoryImageDataAttributes {
    name: string
    alternativeText: string
    caption: string
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
  