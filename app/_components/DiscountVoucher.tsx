import Link from 'next/link'
import React from 'react'

const DiscountVoucher = () => {
  return (
    <div className="items-start border border-primary bg-bright flex min-w-[391px] flex-col px-4 rounded-lg border-solid">
      <div className="items-start self-stretch flex w-full justify-between gap-5 my-4">
        <div className="items-start  flex flex-col w-2/3">
          <div className="text-dark text-base font-medium">
            Get upto 30% Off on order value above $100
          </div>
          <Link href='#' className="text-cyan-900 text-sm font-medium  mt-2">
            Terms & Conditions
          </Link>
        </div>
        <div className="items-start rounded bg-bright 
         flex w-[109px] max-w-full flex-col pl-3.5 pr-4 py-4">
          <div className="text-type-low text-sm font-medium   whitespace-nowrap">
            Use Code
          </div>
          <div className="text-dark text-base font-medium leading-5 self-stretch whitespace-nowrap mt-2.5">
            ORDER100
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscountVoucher