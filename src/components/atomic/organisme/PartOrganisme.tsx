import ImportedSvgs from '@/utils/ImportedSvgs'
import React from 'react'
import Typography from '../atoms/Typography'
import Image, { StaticImageData } from 'next/image'
import LinkButton from '../atoms/LinkButton'

type Props = {
    img: string | StaticImageData,
    alt?: string,
    title: string,
    body: string,
    link: string,
    buttonLabel?: string
}

function PartOrganisme({ img = "", alt="part-image", title = "Default title", body = "Default body", link = "#", buttonLabel = "En apprendre plus" }: Props) {
    return (
        <div className='w-full lg:w-1/3 flex flex-col items-center justify-center'>
            <Image src={img} alt="part-image" className="rounded-md shadow-lg w-full h-2/3 md:w-1/3 lg:w-full lg:h-3/4 my-2" />

            <div className='flex flex-col'>
                <Typography fontVariation='semibold' className='text-base'>{title}</Typography>
                <Typography className="mt-3 text-gray-600 dark:text-gray-400 flex-col leading-loose">
                    {body}
                </Typography>
                <LinkButton href={link} >{buttonLabel}</LinkButton>
            </div>
        </div>
    )
}

export default PartOrganisme