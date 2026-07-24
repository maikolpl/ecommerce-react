
import {Products} from '../../components/EcommerceComponents/Products'
import { useState } from 'react'
import { products } from '../../mocks/products.json'
import type { Product } from '../../types/products'
import { Header } from '../../components/EcommerceComponents/Header'
import { Footer } from '../../components/EcommerceComponents/Footer'
import { SearchTiltleProvider } from '../../provider/SearchTitleProvider'
import { CartProvider } from '../../provider/cartProvider'
import { ProductDetail } from '../../components/EcommerceComponents/ProductDetail'
import { ThemeProvider } from '../../provider/ThemeProvider'
import { useSearch } from '../../hooks/useSearch'




export function HomeEcommerce(){
const { searchTitle, setSearchTitle, searchProducts } = useSearch()
const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
const [isTransitioning, setIstransitioning] = useState(false)

const filteredProducts = searchProducts(products)

const handleSelectProduct = (product:Product) =>{
  setIstransitioning(true)

  setTimeout(()=>{
      setSelectedProduct(product)
      setIstransitioning(false)
    },300)
}
return(
    <ThemeProvider> 
        <SearchTiltleProvider
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
        >
            <CartProvider>
            <Header />
            {isTransitioning && <div className='overlay-transition'/>}
              {selectedProduct ? (
          <ProductDetail
            product={selectedProduct}
            onBack={() => setSelectedProduct(null)}
          />
        ) : (
          <Products
            products={filteredProducts}
            onSelectProduct={handleSelectProduct} 
          />
        )}
        <Footer />
            </CartProvider>
        
        </SearchTiltleProvider>

</ThemeProvider>
)
}