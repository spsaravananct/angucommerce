export interface DeliveryMethod {
    data: DeliveryMethodData[]
}
  
export interface DeliveryMethodData {
    id: number
    name: string
    deliveryTime: string
    description: string
    price: number
  }
  