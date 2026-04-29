import { useContext } from "react";
import { CartContext } from "../context/cart";


export const useCart = () =>{
    const context = useContext(CartContext)
    if(!context){
        throw new Error('useSearchTitle debe usarse dentro de provider')
    }

    return context
}