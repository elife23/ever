import React from 'react'
import Typography from '../atoms/Typography'
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';
type Props = {}

function HeaderPrejoinBtn({ }: Props) {
  return (
    <div className='bg-gray rounded-md flex gap-x-2 w-max py-1 pl-1 pr-4 items-center'>
      <div className='w-60'>
        {/* <input type="text" className='bg-white p-2 ring- h-6 w-full max-w-lg' placeholder='Code de la conférence' /> */}
        <input type="text" placeholder="Code de la conférence" className="input p-2 w-full max-w-xl h-8 ring-0 outline-none rounded-l-md rounded-r-none" />
      </div>
      <Link href="#" className="flex items-center gap-x-1 group">
        <Typography fontVariation='bold' className='text-white text-base'>Rejoindre</Typography>
        <div className="group-hover:translate-x-2 transition-all duration-300">
          <FaArrowRightLong size={15} style={{ fill: 'white' }} />
        </div>
      </Link>
    </div>
  )
}

export default HeaderPrejoinBtn