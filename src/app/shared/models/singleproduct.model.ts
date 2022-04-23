export interface SingleProduct {
    data: ProductData
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
    image: CategoryImage
  }
  
  export interface CategoryImage {
    data: CategoryImageData
  }
  
  export interface CategoryImageData {
    id: number
    attributes: CategoryImageDataAttributes
  }
  
  export interface CategoryImageDataAttributes {
    url: string
  }
  
  export interface Meta {}
  