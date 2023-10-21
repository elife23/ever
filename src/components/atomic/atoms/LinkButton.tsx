import Link from 'next/link'
import React from 'react'

type Props = {
  className?: string,
  children: React.ReactNode | string,
  href?: string,
  isTransparent?: boolean,
}

function LinkButton({ className = "", children = "Link button", href = "", isTransparent = false }: Props) {
  if (isTransparent == false) {
    return (
      <Link href={href} className='w-full lg:w-auto'>
        <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-secondary uppercase transition-colors duration-300 transform bg-primary rounded-md lg:w-auto hover:bg-primary focus:outline-none border-3 border-secondary focus:bg-primary">
          {children}
        </button>
      </Link>

    )
  }
  return (
    <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-primary uppercase transition-colors duration-300 transform bg-primary/0 rounded-md lg:w-auto hover:bg-primary/0 focus:outline-none focus:bg-primary cursor-auto">
      <Link href={href}>{children}</Link>
    </button>
  )
}

export default LinkButton