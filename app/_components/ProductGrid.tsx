import React from 'react'
import ProductCard from './ProductCard'
import { ProductType } from '../types'

const ProductGrid = ({data}:{data:ProductType[]}) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
        {
            data.map((product)=>{
                return <ProductCard key={product.id} product={product}/>
            })
        }
    </div>
  )
}

export default ProductGrid