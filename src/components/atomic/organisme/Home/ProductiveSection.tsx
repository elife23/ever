import Link from 'next/link'
import React from 'react'
import Typography from '../../atoms/Typography'
import Image from 'next/image';
import { motion } from "framer-motion";
import LinkButton from '../../atoms/LinkButton';
import home1 from "../../../../../public/images/home1.png";

type Props = {}

function ProductiveSection({ }: Props) {
  return (
    <motion.div whileInView={{ opacity: 1}} initial={{opacity:0}} className="flex flex-col lg:flex-row bg-tertiary dark:bg-gray-900">
      <div className="container px-6 mx-auto">
        <div className="items-center lg:flex ">
          <motion.div whileInView={{ opacity: 1}} initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <Image className="w-2/3 h-2/3 lg:max-w-xl" src={home1} alt="Header" />


          </motion.div>


          <motion.div whileInView={{ opacity: 1}} initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="w-full lg:w-1/2">
            <div className=" lg:max-w-max w-full">

              <div className='flex flex-col gap-y-4'>
                <Typography fontVariation='semibold' className="my-4 leading-8 text-xl md:text-2xl text-gray-800 dark:text-white lg:text-3xl font-ibm-plex-mono font-bold w-full" >Soyez plus productif en un temps.</Typography>

              </div>

              <Typography className="mt-3 text-gray-600 dark:text-gray-400 flex-col gap-y-3 leading-loose text-sm">
                Aucune autre application de création de diagrammes ne peut égaler la vitesse, la simplicité et la puissance d{"'"}Everseed. Everseed. Diagramme instantané et intuitif instantanée et intuitive, il suffit de dessiner.

              </Typography>

              <div className='flex gap-x-2'>
                <LinkButton href="" >
                  En apprendre plus
                </LinkButton>
              </div>
            </div>
        </motion.div>

      </div>
    </div>
    </motion.div >
  )
}

export default ProductiveSection