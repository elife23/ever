import React from 'react'
import Image from "next/image";
import {motion} from "framer-motion";
import LinkButton from '../../atoms/LinkButton';
import Typography from '../../atoms/Typography';
import home3 from "../../../../../public/images/home3.png";

type Props = {}

function VisualisationSection({}: Props) {
  return (
    <div className="flex flex-col lg:flex-row bg-tertiary py-10 dark:bg-gray-900">
      <div className="container px-6 mx-auto">
        <div className="items-center lg:flex ">
          <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <Image className="w-2/3 h-2/3 lg:w-3/4" src={home3} alt="Header" />


          </motion.div>


          <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="w-full lg:w-1/2">
            <div className=" lg:max-w-max w-full">

              <div className='flex flex-col gap-y-4'>
                <Typography fontVariation='semibold' className="my-4 leading-8 text-xl md:text-2xl text-gray-800 dark:text-white lg:text-3xl font-ibm-plex-mono font-bold w-full" >Visualisation pure, 100% intégrée dans Consfluence.</Typography>

              </div>

              <Typography className="mt-3 text-gray-600 dark:text-gray-400 flex-col gap-y-3 leading-loose text-sm">
              Everseed est conçu pour les équipes qui travaillent dans Confluence, offrant des fonctionnalités uniques comme l{"'"}édition collaborative en temps réel l{"'"}édition collaborative en temps réel, native de Confluence.

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
    </div >
  )
}

export default VisualisationSection