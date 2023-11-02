'use client'
import BreadCrumb from '@/app/_components/BreadCrumb';
import Loading from '@/app/_components/Loading';
import { PRODUCTS } from '@/app/constants';
import { getSingleProduct } from '@/app/service';
import React, { useEffect, useMemo, useState } from 'react'
import useSWR from 'swr';
import Image from 'next/image';
import ImageCarousel from '@/app/_components/ImageCarousel';
import Rating from '@/app/_components/Rating';
import Stepper from '@/app/_components/Stepper';
import DiscountVoucher from '@/app/_components/DiscountVoucher';
import { HeartIcon, ShoppingBagIcon } from '@/app/_components/svg';
import SingleLineInput from '@/app/_components/SingleLineInput';
import useCart from '@/app/_hooks/useCart';
import { OutlineButton, PrimaryButton } from '@/app/_components/Button';

const ProductPage = ({params}:{params:{id:number}}) => {
  const {id} = params
  const {data,isLoading} = useSWR(`${PRODUCTS}/${id}`,()=>getSingleProduct(id))
  const breadcrumbItems=useMemo(() =>{
    if(data){
      return [
        { label: 'Home', url: '/' },
        { label:  data.category , url: '#' },
        { label:  data.title}
      ]
    }
    return []
  }, [data])

  const [currentImage, setCurrentImage] = useState<string|null>(null)
  const [images, setImages] = useState([])
  const [buyQuantity, setBuyQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const {addToCart} = useCart()
  const truePrice = useMemo(() => {
    if(data){
      if (data.discountPercentage){
        const price =  data.price/(1-(data.discountPercentage/100))
        return Math.ceil(price*100)/100
      }
      return data.price
    }
    return 0
  }, [data])


  useEffect(()=>{
    if(data && !currentImage){
      setCurrentImage(data.images[0])
    }
  },[currentImage, data])

  useEffect(()=>{
    if(data && data.images.length){
      setImages(data.images)
    } 
  },[data])

  const ClickAddToCart = () =>{
    const Product = {id:data.id,quantity:buyQuantity}
    addToCart(Product)
    setAdded(true)
  }

  if(isLoading) return <Loading/>

  if(data) return (
    <div className="px-5 py-6 container mx-auto">
      <BreadCrumb items={breadcrumbItems} />
      <div className='flex flex-col gap-16'>
        <div className='flex-col xl:flex-row flex gap-6'>
          <div className='flex flex-col gap-6 items-center'>
            {currentImage&&<Image src={currentImage} className='border border-slate-200 rounded-2xl aspect-square object-contain w-fit' alt='product-image' width={605} height={605}/>}
            <div className='mx-auto'>
              <ImageCarousel images={images} setImage={setCurrentImage}/>
            </div>
          </div>

          <div className='gap-4 flex flex-col'>
            <div className='flex flex-col'>
              <div className='gap-2 flex flex-col mb-4'>
                <span className='text-dark text-4xl font-semibold'>{data.title}</span>
                <span className='text-type-low text-xl font-semibold w-3/4'>{data.description}</span>
              </div>
              <div className='gap-4 flex items-center mb-4'>
                <Rating rating={data.rating}/>
                <span className='text-light-text text-base'>(250) Ratings</span>
              </div>
              <div className='flex gap-4 items-center'>
                <span className='text-[40px] font-bold text-type-high'>
                  ${data.price}
                </span>
                {(data.discountPercentage>0)&&<>
                  <span className='text-[34px] font-semibold text-light-text line-through decoration-2'>
                    ${truePrice}
                  </span>
                  <span className='text-xl font-semibold text-major-vibrant'>
                    {data.discountPercentage}%OFF
                  </span>
                </>}
              </div>
            </div>
            <hr />
            <div className='flex flex-col'>
              <div className='flex flex-col md:flex-row items-start gap-4 mb-6'>
                <div className='md:w-1/3 flex flex-col gap-2'>
                  <span className='text-xl font-semibold text-type-high'>Delivery Details</span>
                  <span className='text-base font-medium text-type-low'>Check estimated delivery date/pickup option.</span>
                </div>
                <SingleLineInput placeholder='Apply Valid Pincode' buttonLabel='CHECK'/>
              </div>
              <div className='gap-4 flex mb-8'>
                <span className='text-dark text-xl font-semibold'>Quantity:</span>
                <Stepper quantity={buyQuantity} onQuantityChange={setBuyQuantity}/>
              </div>
              <div className='flex overflow-x-scroll gap-8 mb-10 max-w-[350px] md:max-w-[650px] xl:max-w-[1000px]'>
                <DiscountVoucher/>
                <DiscountVoucher/>
                <DiscountVoucher/>
                
              </div>
              <div className='flex flex-col md:flex-row items-center gap-6'>
                <PrimaryButton onClick={ClickAddToCart} disabled={added} iconToLeft = {added?'':<ShoppingBagIcon className='stroke-current'/>} label={added?'Added to bag':'Add to bag'}/>
                <OutlineButton iconToLeft = {<HeartIcon className="stroke-current"/>} label='Add To Wishlist'/>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="items-start bg-grey  flex w-full justify-start px-4 gap-5 py-2 rounded-xl max-md:max-w-full">
            <div className="text-bright text-base font-medium whitespace-nowrap items-start bg-primary w-[189px] max-w-full px-5 py-1.5 rounded-lg">
              Product Description
            </div>
            <div className="hidden md:block text-type-low text-base font-medium whitespace-nowrap items-start w-[167px] max-w-full px-5 py-1.5">
              Related Products
            </div>
            <div className="hidden md:block text-type-low text-base font-medium  whitespace-nowrap items-start  w-[195px] max-w-full px-5 py-1.5">
              Ratings and Reviews
            </div>
          </div>
          <div className="text-type-low max-md:text-sm text-base font-medium flex mt-6 w-fit">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
            scelerisque laoreet tortor cras molestie tincidunt malesuada malesuada.
            Neque, mauris duis dui id morbi magna. Cras lacus, viverra auctor in
            turpis est quisque eget tristique. <br />
            <br />
            Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et
            pharetra platea pretium nec feugiat tincidunt quam leo tristique. Nulla
            enim consectetur sit et tempus, faucibus leo ac cras. Purus ut non eu
            mus volutpat. <br />
            <br />
            Eget est vel sagittis amet sit eu eu ullamcorper tellus. Leo mauris,
            faucibus vulputate adipiscing elementum tristique dictumst augue
            pellentesque. Justo, sed nunc, pretium turpis scelerisque. Enim urna
            etiam morbi vestibulum ac dictumst. Ac ut elementum molestie sit felis
            imperdiet.
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage