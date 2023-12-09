import React from 'react'
import Typography from '../../atoms/Typography'
import Image from 'next/image'
import importedImages from '@/utils/importedImg'
import LinkButton from '../../atoms/LinkButton'

type Props = {}

function TryAppSection({ }: Props) {
    return (
        <div className="h-screen flex flex-col lg:flex-row bg-[#F2F4F5] dark:bg-gray-900 lg:h-[120vh] overflow-y-hidden pt-8 lg:pt-18 ">
            <div className="container px-6 mx-auto">
                <div className="items-center justify-center lg:flex-col ">



                    <div className="w-full lg:w-full">
                        <div className=" lg:max-w-full text-center">

                            <div className='flex flex-col gap-y-4 items-center justify-center'>
                                <Typography fontVariation='semibold' className="my-4 lg:max-w-lg leading-8 text-xl md:text-2xl text-gray-800 dark:text-white lg:text-4xl font-ibm-plex-mono font-bold w-full" >Essayer everSeed</Typography>

                            </div>

                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full lg:w-full">
                        <Image className="w-full h-3/3 lg:max-w-lg lg:h-full " src={importedImages.headerOne} alt="whiteboard" />
                    </div>

                    <div className='flex gap-x-2 lg:w-full py-4 justify-center items-center'>
                        <LinkButton className="bg-primary border-primary" noMarginTop={true} href={"#"} >
                            S{"'"}inscrire maintenant
                        </LinkButton>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default TryAppSection