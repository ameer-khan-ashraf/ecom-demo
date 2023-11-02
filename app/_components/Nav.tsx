'use client'
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { HamburgerIcon, SearchIcon, ShoppingBagIcon, UserIcon, WishListIcon } from "./svg";
import useCart from "../_hooks/useCart";

const Nav = () => {
    const {cart} = useCart()
    const [mobileNav, setMobileNav] = useState(false)
  return (
    <nav className=" container mx-auto flex flex-wrap items-center justify-between py-4 px-5 font-medium text-sm w-full relative">
        <div className="flex gap-8 max-xl:justify-between max-xl:w-full">
            <Link href="/" className="flex">
                <Image src="/svg/logo.svg" alt="logo" width={108} height={22}></Image>
            </Link>
            <button onClick={()=>setMobileNav(!mobileNav)} className="xl:hidden">
                <HamburgerIcon/>
            </button>
            <div className="gap-5 hidden xl:flex">
                <Link href='#'>
                    Handbags
                </Link>
                <Link href='#'>
                    Watches
                </Link>
                <Link href='#'>
                    Skincare
                </Link>
                <Link href='#'>
                    Jewellery
                </Link>
                <Link href='#'>
                    Apparells
                </Link>
            </div>
        </div>
        {mobileNav&&<div className="w-full bg-bright absolute top-full left-0 flex flex-col gap-2 right-0 px-2 pb-4 z-50 xl:hidden drop-shadow-sm">
            <div className="bg-grey py-2.5 px-2 rounded flex gap-2">
                <SearchIcon/>
                <input placeholder="Search for products or brands..." className="bg-transparent placeholder:text-grey-text w-80"></input>
            </div>
            <div className="gap-2 grid grid-cols-2 md:grid-cols-3 w-full justify-center">
                <Link className="text-center px-4 py-2 border rounded" href='#'>
                    Handbags
                </Link>
                <Link className="text-center px-4 py-2 border rounded" href='#'>
                    Watches
                </Link>
                <Link className="text-center px-4 py-2 border rounded" href='#'>
                    Skincare
                </Link>
                <Link className="text-center px-4 py-2 border rounded" href='#'>
                    Jewellery
                </Link>
                <Link className="text-center px-4 py-2 border rounded" href='#'>
                    Apparells
                </Link>
            </div>
            <div className="flex gap-5 w-full justify-center items-center">
                <Link className="px-6 py-2 border rounded-md" href='#'>
                    <WishListIcon/>
                </Link>
                <Link className="px-6 py-2 border rounded-md" href='#'>
                    <UserIcon/>
                </Link>
                <Link className="px-6 py-2 relative border rounded-md" href='/my-cart'>
                    <ShoppingBagIcon className="stroke-current text-primary"/>
                    {!!cart.length&&<div className="absolute bg-highlight w-2 h-2 outline outline-white outline-3 rounded-full top-1 right-0"></div>}
                </Link>
            </div>
        </div>}
        <div className="gap-6 items-center hidden xl:flex">
            <div className="bg-grey py-2.5 px-2 rounded flex gap-2">
                <SearchIcon/>
                <input placeholder="Search for products or brands..." className="bg-transparent placeholder:text-grey-text w-80"></input>
            </div>
            <div className="flex gap-5">
                <Link href='#'>
                    <WishListIcon/>
                </Link>
                <Link href='#'>
                    <UserIcon/>
                </Link>
                <Link href='/my-cart' className="relative">
                    <ShoppingBagIcon className="stroke-current text-primary"/>
                    {!!cart.length&&<div className="absolute bg-highlight w-2 h-2 outline outline-white outline-3 rounded-full top-1 right-0"></div>}
                </Link>
            </div>
        </div>
    </nav>
  );
};

export default Nav;
