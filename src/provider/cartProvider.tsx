import { useReducer } from "react"
import { CartContext } from "../context/cart"
import type { Product } from "../types/products"
import { Cartreducer, initialState } from "../reducers/cartReducer"






export function CartProvider ({children}: {children: React.ReactNode}){
    const [cart,dispatch]= useReducer(Cartreducer, initialState)

    const addToCart = (product:Product)=>{
        dispatch({type:'ADD_TO_CART', payload: product})
    }

    const removeFromCart = (product:Product) =>{
        dispatch({type:'REMOVE_FROM_CART',payload:product})
    }

    const clearCart = ()=>{
        dispatch({type:'CLEAR_CART'})
    }

    

    return(
        <CartContext.Provider value={{cart,addToCart,clearCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}