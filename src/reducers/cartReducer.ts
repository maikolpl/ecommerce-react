import type { Product } from "../types/products"


    type CartItem = Product & {
    quantity: number
}
    export const initialState: CartItem[] = []
    export const Cartreducer = (state: CartItem[], action: {type:string, payload?:Product}) =>{
        switch(action.type){
            
            case 'ADD_TO_CART':{
                const product = action.payload
                if (!product) return state
                const productIndex= state.findIndex(item => item.id === product.id)
                if(productIndex >= 0){
            // si el producto esta en el carrito
            const newState = structuredClone(state)
            newState[productIndex].quantity += 1
            return newState
        }
        return[
            ...state,
            {...product, quantity: 1}
        ]
            }
            case 'DECREMENT_QUANTITY':{
            const product = action.payload
            if(!product) return state
            const productIndex = state.findIndex(item => item.id === product.id)

            if(productIndex >= 0){
                const newState = structuredClone(state)

                if(newState[productIndex].quantity > 1){
                    newState[productIndex].quantity -=1 
                    return newState
                }
                return state.filter(item => item.id !== product.id)
            }
            return state

        } 
            case 'REMOVE_FROM_CART': {
                const product = action.payload
                if(!product) return state
                return state.filter(item => item.id !== product.id)
            }

            case 'CLEAR_CART':{
                return []     
            }
            default:{
                    return state    
                }
        }
    
    }