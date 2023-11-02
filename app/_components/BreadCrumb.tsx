import React from 'react'
import { BreadCrumbItemType } from '../types'

const BreadCrumb = ({items}:{items:BreadCrumbItemType[]}) => {
  return (
    <ul className="flex text-base font-medium mb-4">
        {items.map((item, index:number) => (
          <li key={index} className="flex items-center">
            {index < items.length - 1 ? (
              <>
                <a href={item.url} className="text-primary hover:underline">
                  {item.label}
                </a>
                <span className="mx-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 8L14 12L10 16" stroke="#171520" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
              </>
            ) : (
              <span className='text-type-low'>{item.label}</span>
            )}
          </li>
        ))}
      </ul>
  )
}

export default BreadCrumb