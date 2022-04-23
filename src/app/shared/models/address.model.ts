export interface Address {
    data: AddressData[]
}
  
export interface AddressData {
    id: number
    firstname: string
    lastname: string
    street: string
    city: string
    state: string
    pincode: string
}