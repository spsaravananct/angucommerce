import { v4 as uuidv4 } from 'uuid';

export interface ICart {
    cart_id: string
    cart_items: CartItem[]
}  

export class Cart implements ICart{
   cart_id=uuidv4();
   cart_items:CartItem[]=[];
}

export interface CartItem {
    product_id: number
    quantity: number
    product: Product
}
   
export interface Product {
    id: number
    name: string
    price: number
    image:ImageData
}

export interface ImageData {
    url: string
}

export interface Category {
    id: number
    name: string
}

export interface CartTotal {
    shipping: number;
    subtotal: number;
    total: number;
}
   