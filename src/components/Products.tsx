import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import type { Product } from '../types/products'
import { useCart } from '../hooks/UseCart'

type Props = {
    products:Product[],
    onSelectProduct: (product:Product) => void
}


export function Products ({products,onSelectProduct}:Props){
    const {addToCart,removeFromCart, cart} = useCart()

    const checkProductInCart = (product:Product) =>{
        return cart.some(item=> item.id === product.id)
    }
    return(
        <main className='products'>
            {products.map(product =>{
            const isProductInCart = checkProductInCart(product)
            return(
                    <li key={product.id}
                    onClick={()=>onSelectProduct(product)}
                    >
                    <img src={product.images[0]} alt={`${product.title} - ${product.category}`} />

                    <div>
                        <h3>{product.title} - ${product.price}</h3>
                    </div>
                    <div>
                            <button style={{ backgroundColor: isProductInCart ? '#FF5A5F' : '#ADD8E6' }} 
                            
                            onClick={(e)=> {
                                e.stopPropagation()
                                if(isProductInCart) {
                                removeFromCart(product) 
                                }else{
                                addToCart(product)
                                }

                                
                                }}>
                                {
                                    isProductInCart ?
                                    <RemoveFromCartIcon/>
                                    : <AddToCartIcon/>
                                }
                                
                            </button>
                    </div>
                </li>
                )
            })}

        </main>
    )
}