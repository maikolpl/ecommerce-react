import {createContext } from "react";
import type { Product } from "../types/products";

type cartItem = Product & {
    quantity: number
}

export type CartContextType = {
    cart: cartItem[]
    addToCart: (product:Product)=> void
    decrementQuantity: (product:Product) => void
    clearCart: () => void
    removeFromCart: (product:Product)=> void
}
export const CartContext = createContext<CartContextType | null>(null)

