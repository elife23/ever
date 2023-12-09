import React, { ReactNode } from 'react'
import Image, { StaticImageData } from 'next/image'

type Props = {
    image: ReactNode,
    title: string,
    body: string,
}

function SessionManCard({image, title, body}: Props) {
  return (
    <div className="card w-96">
            <div className="card-body items-center">
                {/* <Image alt="image" src={image} className="" /> */}
                <div className="rounded-full bg-white p-4 w-max">
                    {image}
                </div>
                <h2 className="card-title text-light">{title}</h2>
                <p className="text-light text-center">{body}</p>
            </div>
        </div>
  )
}

export default SessionManCard