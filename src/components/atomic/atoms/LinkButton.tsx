import Link from 'next/link'
import React from 'react'

type Props = {
  className?: string,
  children: React.ReactNode | string,
  href?: string,
  noMarginTop?: boolean,
}

function LinkButton({ className = "", noMarginTop=false, children = "Link button", href = ""}: Props) {
    return (
      <Link href={href} className='w-full lg:w-max'>
        <button className={`${className} w-full px-5 py-2 ${noMarginTop == true ? 'mt-0' : 'mt-6'} text-sm tracking-wider text-white uppercase transition-colors duration-300 transform rounded-md focus:outline-none border-2`}>
          {children}
        </button>
      </Link>

    )
  
}

export default LinkButton