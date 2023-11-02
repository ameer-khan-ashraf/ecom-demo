import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HeartIcon } from './svg'
import { ProductType } from '../types'

const ProductCard = ({product}:{product:ProductType}) => {
  const [liked, setLiked] = useState(false)
  const clickLiked = (e:React.MouseEvent<HTMLButtonElement>)=>{
    e.stopPropagation();
    setLiked(!liked)
  }

  const productLink = `/product/${encodeURIComponent(product.id)}`

  return (
    <div className='w-full gap-2 flex flex-col'>
      <Link href={productLink}>
        <Image className='rounded-lg aspect-square object-cover' src={product.thumbnail} alt='product-thumbnail' width={332} height={332}/>
      </Link>
      <div className='flex justify-between items-start'>
        <div className='flex flex-col items-start'>
          <Link href={`/product/${encodeURIComponent(product.id)}`} className='font-medium text-base text-type-high'>{product.title}</Link>
          <Link href='#' className='text-sm text-type-low'>{product.brand}</Link>
          <span className='text-base font-medium text-type-high'>${product.price}</span>
        </div>
        <button type='button' onClick={clickLiked}>
          <HeartIcon className={liked?'fill-current stroke-current text-red-500':'stroke-current text-black'}/>
        </button>
      </div>
    </div>
  )
}

export default ProductCard