import { useState } from "react"
import type { Product } from '../types/products'

export function  useSearch(){
const [searchTitle,setSearchTitle] = useState('')

const searchProducts = ( products:Product[])=>{
    return products.filter(product =>
    product.title.toLowerCase().includes(searchTitle.toLowerCase())
    )
}
return{searchTitle,setSearchTitle,searchProducts}
}