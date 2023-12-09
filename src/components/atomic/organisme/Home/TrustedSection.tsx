/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Typography from '../../atoms/Typography'
import { motion } from "framer-motion";
import LinkButton from '../../atoms/LinkButton';

type Props = {}

function TrustedSection({ }: Props) {
    return (
        <div className="flex flex-col lg:flex-row bg-tertiary py-10 dark:bg-gray-900 my-10 lg:h-[100vh] overflow-y-hidden">
            <div className="container px-6 mx-auto">
                <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="w-full ">
                    <div className=" lg:max-w-max w-full  lg:flex flex-col lg:items-center">

                        <div className='flex flex-col gap-y-4'>
                            <Typography fontVariation='semibold' className="my-4 leading-8 text-xl md:text-2xl text-gray-800 dark:text-white text-center lg:text-3xl font-ibm-plex-mono font-bold w-full" >
                                Les plus grandes équipes font confiance à <span className='text-primary'>E</span>verseed
                            </Typography>

                        </div>

                        <Typography className="mt-3 text-dark dark:text-gray-400 flex-col gap-y-3 leading-loose text-center text-sm">
                        Rejoignez dès maintenant notre communauté diversifiée. Que vous soyez un particulier qui souhaite organiser des appels vidéo avec des proches, un créateur de contenus qui veut partager des tutoriels en ligne, un professionnel en quête d'outils de communication efficaces ou un formateur cherchant à dispenser des cours à distance, notre plateforme est là pour vous.
                        </Typography>
                        <div className='mt-4 w-full  py-1 border-b-2 border-dashed' />
                        <div className='py-5 w-full'>

                        </div>
                        <div className='mt-4 w-full  py-1 border-b-2 border-dashed' />

                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default TrustedSection