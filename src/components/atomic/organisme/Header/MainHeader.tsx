import React from 'react'
import Typography from '../../atoms/Typography'
import Image from 'next/image'
import ImportedSvgs from '@/utils/ImportedSvgs'
import Gif from "../../../../../public/images/Gif/header.gif";
import headerWhiteboard from "../../../../../public/images/headerWhiteboard.svg";
import { motion } from "framer-motion";

type Props = {}

function MainHeader({ }: Props) {
  return (
    <>
      <header className="bg-white dark:bg-gray-900">
        <div className="container px-6 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <Typography fontVariation='semibold' className="text-3xl md:text-5xl text-gray-800 dark:text-white lg:text-4xl" >Le moyen le plus simple pour les équipes de travail de collaborer.</Typography>

                <Typography className="mt-3 text-gray-600 dark:text-gray-400 flex-col gap-y-3">
                  Collaborer sur des tableaux blancs en temps réel <br />
                  Plus d{"'"}installations que toutes les applications de diagramme de Confluence combinées <br />
                  Pour la sécurité des appels en vidéogroupe
                </Typography>

                <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-primary rounded-lg lg:w-auto hover:bg-primary focus:outline-none focus:bg-primary">Shop Now</button>
              </div>
            </div>

            <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <Image className="w-full h-full lg:max-w-xl" src={Gif} alt="Header" />


            </motion.div>
          </div>
        </div>
      </header>
    </>
  )
}

export default MainHeader