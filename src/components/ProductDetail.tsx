import { useCart } from "../hooks/UseCart";
import type { Product } from "../types/products";
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import './ProductDetail.css'

type Props = {
  product: Product,
  onBack: () => void
}

export function ProductDetail({ product, onBack }: Props) {
  const { addToCart, removeFromCart, cart } = useCart()

  const checkProductInCart = (product: Product) => {
    return cart.some(item => item.id === product.id)
  }

  const isProductInCart = checkProductInCart(product)

  return (
    <section className="detalle-producto">

    
      <div className="cerrar-detalle" onClick={onBack}>
        ✖
      </div>

      <img
        className="camisa"
        src={product.images[0]}
        alt={product.title}
      />

   
      <div className="info-producto">
        <h3>{product.title} - ${product.price}</h3>
        <p>{product.category}</p>

        <div className="agregar-carrito">
          <button
            className="boton-primario"
            style={{ backgroundColor: isProductInCart ? '#FF5A5F' : '#ADD8E6' }}
            onClick={() =>
              isProductInCart
                ? removeFromCart(product)
                : addToCart(product)
            }
          >
            {
              isProductInCart
                ? <RemoveFromCartIcon />
                : <AddToCartIcon />
            }
          </button>
        </div>
      </div>

    </section>
  )
}