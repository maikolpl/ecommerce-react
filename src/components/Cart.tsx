import { ClearCartIcon } from "./Icons";
import './Cart.css'
import { useCart } from "../hooks/UseCart";
import type { Product } from "../types/products";

type Props ={
    product: Product & {quantity: number}
    addToCart: (product:Product)=> void
}

type CartProps ={
    onClose: ()=> void
}


function CartItem ({product,addToCart}: Props){
    return(
        <li>
                <img src={product.images[0]} alt={product.title} />
                <div>
                    <strong>{product.title}</strong> - {product.price}
                </div>

                <footer>
                    <small>
                        Qty:{product.quantity}
                    </small>
                    <button onClick={()=>addToCart(product)}>+</button>
                </footer>
        </li>

    )
 
}
export function Cart ({onClose}: CartProps){
    const {cart, clearCart, addToCart} = useCart()
    const total = cart.reduce((acc: number,item) => {
        return acc + item.price * item.quantity
    },0)
    const formattedTotal = new Intl.NumberFormat('es-CO',{
        style:'currency',
        currency: 'COP'
    }).format(total)
    return(
        <aside className="cart">
            <header className="cart-header">
                <h2>Carrito</h2>
                <button onClick={onClose}>✖</button>
            </header>
        <ul>
            {cart.map(product =>(
                <CartItem
      key={product.id}
      product={product}
      addToCart={addToCart}
    />
            ))}
            <button className="checkout-button">
                <p>Total: {formattedTotal}</p>
                <p>COMPRAR AHORA</p>
            </button>
        </ul>
        <button onClick={clearCart}>
            <ClearCartIcon/>
        </button>
        </aside>
    )
}