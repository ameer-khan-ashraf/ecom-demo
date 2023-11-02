import React from 'react'

const SingleLineInput = ({placeholder,buttonLabel}:{placeholder:string,buttonLabel:string}) => {
  return (
    <form className='w-[390px] bg-grey flex h-12 rounded'>
        <input type="text" className='bg-transparent placeholder:text-type-low w-full px-4 focus:outline-0' placeholder={placeholder}/>
        <button type='submit' className='text-primary text-sm font-semibold px-4'>{buttonLabel}</button>
    </form>
  )
}

export default SingleLineInput