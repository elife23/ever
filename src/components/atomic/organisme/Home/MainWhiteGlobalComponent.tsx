import React from 'react'
import Link from 'next/link'
import Typography from '../../atoms/Typography'
import Image, { StaticImageData } from 'next/image';
import { motion } from "framer-motion";
import LinkButton from '../../atoms/LinkButton';
import home1 from "../../../../../public/images/home1.png";
import importedImages from '@/utils/importedImg';

type Props = {
    title: string,
    subTitle: string,
    buttonLink: string,
    buttonLabel?: string,
    img: string | StaticImageData,
}

function MainWhiteGlobalComponent({title, subTitle, buttonLink, buttonLabel='EN APPRENDRE PLUS', img}: Props) {
  return (
    <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} className="h-screen flex flex-col lg:flex-row bg-white dark:bg-gray-900 lg:h-[120vh] overflow-y-hidden pt-8 lg:pt-14">
      <div className="container px-6 mx-auto">
        <div className="items-center justify-center lg:flex-col ">



          <motion.div whileInView={{ opacity: 1 }} initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="w-full lg:w-full">
            <div className=" lg:max-w-full text-center">

              <div className='flex flex-col gap-y-4'>
                <Typography fontVariation='semibold' className="my-4 leading-8 text-xl md:text-2xl text-gray-800 dark:text-white lg:text-3xl font-ibm-plex-mono font-bold w-full" >{title}</Typography>

              </div>

              <Typography className="mt-3 text-gray-600 dark:text-gray-400 flex-col gap-y-3 leading-loose text-sm">
                {subTitle}

              </Typography>

              <div className='flex gap-x-2 lg:w-full py-4 justify-center items-center'>
                <LinkButton noMarginTop={true} href={buttonLink} >
                  {buttonLabel}
                </LinkButton>
              </div>
            </div>
          </motion.div>

          <motion.div whileInView={{ opacity: 1 }} initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="flex items-center justify-center w-full mt-6 lg:w-full">
            <Image className="w-full h-3/3 lg:max-w-3xl lg:h-3/4 shadow-xl" src={img} alt="whiteboard" />
          </motion.div>

        </div>
      </div>
    </motion.div >
  )
}

export default MainWhiteGlobalComponent