import Link from 'next/link'
import React from 'react'

type Props = {
    className?: string,
    children: React.ReactNode | string,
    href?: string,
    isTransparent?: boolean,
}

function LinkButtonTransparent({ className = "", children = "Link button secondary", href = "", isTransparent = false }: Props) {
    return (
        // <Link href={href} className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-secondary uppercase transition-colors duration-300 transform bg-primary rounded-sm lg:w-auto hover:bg-primary focus:outline-none border-3 border-secondary focus:bg-primary">
        //     {children}
        // </Link>
        <Link href={href} className='w-full lg:w-auto'>
            <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider uppercase transition-colors duration-300 transform rounded-sm lg:w-auto focus:outline-none text-secondary hover:text-secondary/80 border-2 border-secondary hover:border-secondary/80">
                {children}
            </button>
        </Link>
    )
}

export default LinkButtonTransparent