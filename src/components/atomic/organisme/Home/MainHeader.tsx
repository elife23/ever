import React from 'react'
import Typography from '../../atoms/Typography'
import Image from 'next/image'
import ImportedSvgs from '@/utils/ImportedSvgs'
import Gif from "../../../../../public/images/Gif/header.gif";
import headerWhiteboard from "../../../../../public/images/headerWhiteboard.svg";
import { motion } from "framer-motion";
import Link from 'next/link';
import LinkButton from '../../atoms/LinkButton';
import importedImages from '@/utils/importedImg';

type Props = {}

function MainHeader({ }: Props) {
  return (
    <>
      <header className="bg-white h-max dark:bg-gray-900 py-10 lg:h-[90vh]">
        <div className="container px-6 mx-auto md:h-full">
          <div className="items-center lg:flex md:h-full">
            <div className="w-full h-1/2 lg:h-full lg:flex lg:items-center lg:w-1/2">
              <div className=" lg:max-w-max w-full">

                <div className='flex flex-col gap-y-4'>
                  <Typography fontVariation='semibold' className="my-4 leading-8 text-2xl md:text-3xl text-gray-800 dark:text-white lg:text-4xl font-ibm-plex-mono font-bold w-full" >Le moyen le plus simple pour les équipes de travail de collaborer.</Typography>

                </div>

                <Typography className="mt-3 text-gray-600 dark:text-gray-400 flex-col gap-y-3 leading-loose text-sm">
                  Collaborer sur des tableaux blancs en temps réel <br />
                  Plus d{"'"}installations que toutes les applications de diagramme de Confluence combinées <br />
                  Pour la sécurité des appels en vidéogroupe
                </Typography>

                <div className='flex gap-x-2'>
                  <LinkButton href="#">Essayer gratuitement</LinkButton>
                  <LinkButton href="#" isTransparent={true}>Réserver une démo privée</LinkButton>
                </div>
              </div>
            </div>

            <motion.div initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              {/* <Image className="w-full h-full lg:max-w-xl" src={Gif} alt="Header" /> */}
              <Image className="w-full h-full lg:max-w-2xl lg:h-max object-fill rounded-lg" width={1000} height={1000} src={importedImages.headerImg} alt="header Image" />
            </motion.div>
          </div>
        </div>
      </header>
    </>
  )
}

export default MainHeader