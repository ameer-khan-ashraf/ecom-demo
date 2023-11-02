'use client'
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import BreadCrumb from "../_components/BreadCrumb";
import SingleLineInput from "../_components/SingleLineInput";
import { OutlineButton, PrimaryButton } from "../_components/Button";
import useCart from "../_hooks/useCart";
import useSWR from "swr";
import { getProductsById } from "../service";
import Loading from "../_components/Loading";
import { ProductType, cartItemType } from "../types";

const Cart = () => {
  const breadcrumbItems = [{ label: "Home", url: "/" }, { label: "Cart" }];
  const {cart} = useCart()

  const [cartIds, setCartIds] = useState<number[]>([])
  

  const {data,isLoading} = useSWR(cartIds,()=>getProductsById(cartIds))


  const quantityDict = useMemo(() => Object.assign({}, ...cart.map((x:cartItemType) => ({[x.id]: x.quantity}))), [cart]) 

  const SubTotal = useMemo(() =>{
    let total = 0
    data?.forEach((product)=>{
      total += product.price * quantityDict[product.id]
    })
    return total
  }, [data, quantityDict])

  useEffect(()=>{
    if(cart.length){
      const cartIds =cart.map((product:cartItemType)=>product.id)
      setCartIds(cartIds)
    }
  },[cart])

  return (
    <div className="flex flex-col px-5 py-6 container mx-auto">
      <BreadCrumb items={breadcrumbItems} />
      <div className="text-primary text-4xl font-semibold leading-10  w-full max-md:max-w-full">
        My Cart
      </div>
      <div className=" w-full mt-10 max-md:max-w-full">
        {isLoading?<Loading/>:
        !!data?.length?
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[65%] max-md:w-full max-md:ml-0">
            <div className="items-start flex grow flex-col w-[710px] mt-1 max-md:max-w-full max-md:mt-10">
              <div className=" grid w-full items-start justify-between gap-5 grid-cols-3">
                <div className="text-type-low text-base font-medium  col-span-2">
                  Product Name
                </div>
                <div className="grid grid-cols-3 w-[274px] max-w-full items-start justify-between gap-5 ">
                  <div className="text-type-low text-base font-medium  ">
                    Price
                  </div>
                  <div className="text-type-low text-base font-medium  ">
                    Qty
                  </div>
                  <div className="text-type-low text-base font-medium   ">
                    Subtotal
                  </div>
                </div>
              </div>
              <div className="bg-black bg-opacity-10  w-full h-px mt-2 max-md:max-w-full" />
              <div className="mt-7 pl-1 w-full gap-8 flex flex-col">
                {!!data&&data.map((product:ProductType)=>{
                  return <CartItem product={product} quantity={quantityDict[product.id]} key={product.id}/>
                })}
              </div>
              <div className="items-start  flex grow flex-col mt-20 max-md:max-w-full max-md:mt-10">
                <div className="justify-between items-start flex w-[710px] mb-4 max-w-full flex-col ">
                  <div className="text-dark text-base font-medium  max-w-[310px] grow shrink-0 basis-auto ">
                    Apply Coupon Code
                  </div>
                  <div className="bg-black bg-opacity-10  w-full h-px mt-2.5 max-md:max-w-full" />
                </div>
                <SingleLineInput
                  placeholder="Apply Coupon Code"
                  buttonLabel="CHECK"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[35%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-start flex flex-col w-[411px] pt-3.5 max-md:mt-10">
              <div className="items-start  flex flex-col w-full pr-5 py-0.5">
                <div className="text-dark text-xl font-semibold justify-center items-start pb-4">
                  Order Summary
                </div>
                <hr className="bg-grey w-full" />
                <div className="items-start  flex grow flex-col w-full mt-8">
                  <div className="justify-between items-start  flex w-full gap-5">
                    <div className="text-type-low text-base font-medium  ">
                      Sub Total
                    </div>
                    <div className="text-dark text-right text-base font-medium   ">
                      ${SubTotal}
                    </div>
                  </div>
                  <div className="justify-between items-start  flex w-full gap-5 mt-3">
                    <div className="text-type-low text-base font-medium  ">
                      Discount
                    </div>
                    <div className="text-dark text-right text-base font-medium   ">
                      -$00.00
                    </div>
                  </div>
                  <div className="justify-between items-start  flex w-full gap-5 mt-3">
                    <div className="text-type-low text-base font-medium  ">
                      Delivery Fee
                    </div>
                    <div className="text-dark text-right text-base font-medium   ">
                      -$0.00
                    </div>
                  </div>
                  <div className="justify-between items-start  flex w-full gap-5 mt-3">
                    <div className="text-dark text-base font-semibold  ">
                      Grand Total
                    </div>
                    <div className="text-dark text-right text-base font-semibold  ">
                      {SubTotal}
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-start  flex w-full justify-between gap-5 mt-10 pr-5">
                <PrimaryButton label="Place Order" className="w-full" />
                <OutlineButton label="Continue Shopping" className="w-full" />
              </div>
            </div>
          </div>
        </div>:
        <div className="flex justify-center pt-10 h-full text-type-low text-xl">
          No Products Added to Cart!
        </div>
        }
      </div>
    </div>
  );
};

const CartItem = ({product,quantity}:{product:ProductType,quantity:number}) => {
  const {removeFromCart} = useCart()
  return (
    <div className="gap-5 grid grid-cols-3">
      <div className="justify-start items-center flex gap-4 col-span-2">
        <Image
          alt="product-image"
          width="75"
          height="75"
          loading="lazy"
          src={product.thumbnail}
          className="aspect-square object-cover border rounded-lg object-center w-[75px] overflow-hidden max-w-full "
        />
        <div className="items-start flex flex-col ">
          <div className="text-dark text-base font-medium ">{product.title}</div>
          <div className="text-type-low text-base mt-2">{product.brand}</div>
          <div className="text-type-low text-base mt-2">Qty - {quantity}</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="text-dark text-sm">${product.price}</div>
        <div className="text-dark text-sm">{quantity}</div>
        <div className="text-dark text-sm">${product.price * quantity}</div>
        <div className="col-span-3 flex items-center justify-between px-2">
          <button className="text-primary text-center text-sm font-semibold underline">
            Move to Wishlist
          </button>
          <button onClick={()=>removeFromCart(product.id)} className="text-red-700 text-center text-sm font-semibold underline ">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
