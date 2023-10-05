import React from 'react'

type Props = {}

export default function SpanAnimatedLine({ }: Props) {
    return (
        <span className="absolute w-full h-[1px] bg-secondary left-0 bottom-1 -translate-x-[50%] group-hover:translate-x-0 transition-transform duration-500"></span>

    )
}