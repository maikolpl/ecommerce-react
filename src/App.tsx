import {products} from './mocks/products.json'
import {Products} from './components/Products'
import { useState } from 'react'
import type { Product } from './types/products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { SearchTiltleProvider } from './provider/SearchTitleProvider'
import { CartProvider } from './provider/cartProvider'
import { ProductDetail } from './components/ProductDetail'
import { ThemeProvider } from './provider/ThemeProvider'


const useSearch = () =>{
const [searchTitle,setSearchTitle] = useState('')

const searchProducts = ( products:Product[])=>{
    return products.filter(product =>
    product.title.toLowerCase().includes(searchTitle.toLowerCase())
    )
}
return{products,searchTitle,setSearchTitle,searchProducts}
}

export function App(){
const {products,searchTitle, setSearchTitle,searchProducts} = useSearch()
const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
const [isTransitioning, setIstransitioning] = useState(false)

const searchsProduct = searchProducts(products)

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
            products={searchsProduct}
            onSelectProduct={handleSelectProduct} 
          />
        )}
        <Footer />
            </CartProvider>
        
        </SearchTiltleProvider>

</ThemeProvider>
)
}