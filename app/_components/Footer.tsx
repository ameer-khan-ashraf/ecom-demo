import Link from 'next/link'
import React from 'react'
import { LocationIcon, SocialIcons } from './svg'

const Footer = () => {
  return (
    <div className='bg-primary'>
        <div className='w-full px-4 py-6 md:px-16 md:py-8 gap-6 container mx-auto flex flex-col lg:flex-row justify-between it'>
            <div className='flex flex-col md:flex-row gap-16'>
                <div className='flex flex-col gap-3 text-base font-medium'>
                    <span className='text-bright'>
                        Shop by Category
                    </span>
                    <div className='flex flex-col gap-2 text-light-text'>
                        <Link href='#'>Skincare</Link>
                        <Link href='#'>Personal Care</Link>
                        <Link href='#'>Handbags</Link>
                        <Link href='#'>Apparels</Link>
                        <Link href='#'>Watches</Link>
                        <Link href='#'>Eye Wear</Link>
                        <Link href='#'>Jewellery</Link>
                    </div>
                </div>
                <div className='flex flex-col gap-3 text-base font-medium'>
                    <span className='text-bright'>
                        About
                    </span>
                    <div className='flex md:flex-col gap-2 text-light-text'>
                        <Link className='border-r md:border-0 pr-2 md:p-0' href='#'>Contact Us</Link>
                        <Link className='border-r md:border-0 pr-2 md:p-0' href='#'>About Us</Link>
                        <Link className='border-r md:border-0 pr-2 md:p-0' href='#'>Careers</Link>
                        <Link className='border-r md:border-0 pr-2 md:p-0' href='#'>Press</Link>
                    </div>
                </div>
                <div className='flex flex-col gap-3 text-base font-medium'>
                    <span className='text-bright'>
                        Policy
                    </span>
                    <div className='flex flex-wrap md:flex-col gap-2 text-light-text'>
                        <Link className='border-r md:border-0 pr-2 md:p-0' href='#'>Return Policy</Link>
                        <Link className='border-r md:border-0 pr-2 md:p-0' href='#'>Terms of Use</Link>
                        <Link className='border-r md:border-0 pr-2 md:p-0' href='#'>Sitemap</Link>
                        <Link className='border-r md:border-0 pr-2 md:p-0' href='#'>Security</Link>
                        <Link className='border-r md:border-0 pr-2 md:p-0' href='#'>Privacy</Link>
                        <Link className='border-r md:border-0 pr-2 md:p-0' href='#'>EPR Compliance</Link>
                    </div>
                </div>
            </div>
            <hr />
            <div className='flex flex-col py-2 gap-8 md:items-end'>
                <SocialIcons/>
                <div className='flex flex-col gap-2 md:items-end'>
                    <span className='flex gap-2 text-sm font-medium text-bright'>
                        <LocationIcon/>
                        United States
                    </span>
                    <span className='text-light-text text-sm font-medium'>
                    © 2021 | Cora Leviene All Rights Reserved
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer