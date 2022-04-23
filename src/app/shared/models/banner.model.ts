export interface Banner {
  id: number
  name: string
  status: boolean
  location: string
  banner_images: BannerImage[]
}
export interface BannerImage {
  id: number
  title: string
  link: any
  sort_order: number,
  image: Image
}
export interface Image {
  id: number
  name: string
  url: string
}