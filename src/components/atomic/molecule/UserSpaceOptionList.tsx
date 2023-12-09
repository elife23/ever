import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import Typography from '../atoms/Typography'

type Props = {
    text: string,
}

function UserSpaceOptionList({ text }: Props) {
    return (
        <div className="flex items-center gap-x-4">
            <FaAngleRight size={20} style={{ fill: '#1D1D1D' }} className="font-semibold" />
            <Typography fontVariation='bold' className="lg:text-lg">{text}</Typography>
        </div>
    )
}

export default UserSpaceOptionList