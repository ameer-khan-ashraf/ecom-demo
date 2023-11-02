'use client'
import { ChevronRight, RightArrow } from "@/app/_components/svg";
import Link from "next/link";
import useSWR from "swr";
import { PRODUCTS } from "./constants";
import { getProducts } from "./service";
import ProductGrid from "./_components/ProductGrid";
import Loading from "./_components/Loading";
import { PrimaryButton } from "./_components/Button";

export default function Home() {

  const {data,isLoading} = useSWR(PRODUCTS,()=>getProducts(4))
  return (
    <div className="w-full">
        <div className="w-full bg-grey flex justify-center items-center text-sm px-4 py-2 text-center">
          We are currently experiencing local customs clearance delays. For the latest updates, please check your order status here 
        </div>
        <div className="px-5 py-6 container mx-auto">
            <div className="w-full h-0 pt-[60%] md:pt-[32%] md:rounded-xl xl:rounded-3xl bg-[url('/images/hero-banner.png')] bg-center bg-cover relative">
              <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-end items-center">
                <div className="flex flex-col py-3 xl:py-12 px-6 xl:px-12 w-2/3 md:w-1/2 gap-4 xl:gap-12 bg-[#DEDEDE] bg-opacity-70 rounded-l-3xl text-primary">
                  <div className="flex flex-col lg:gap-6">
                    <span className="text-xl lg:text-6xl font-extrabold">Carry your Funk</span>
                    <span className="text-base lg:text-2xl font-medium">Trendy handbags collection for your <br></br> party animal</span>
                  </div>
                  <PrimaryButton
                    iconToLeft={<RightArrow/>}
                    label='See more'
                    className="w-fit px-4 py-2 lg:w-[180px] text-sm items-center"
                  />
                </div>
              </div>
            </div>
            <div className="mt-16 flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <span className="text-[36px] font-semibold">
                  New Arrivals
                </span>
                <Link href='#' className="flex gap-2 text-primary text-sm font-semibold">
                  View All
                  <ChevronRight/>
                </Link>
              </div>
              {isLoading?
                <div>
                  <Loading/>
                </div>
              :
                <ProductGrid data={data}/>
              }
            </div>
        </div>
    </div>
  )
}
